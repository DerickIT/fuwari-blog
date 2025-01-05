---
category: Golang
tags:
  - Golang
  - DataBase
status: 已发布
catalog: []
slug: open-channels-three-ways
title: Three Ways To Think About Channels
urlname: 5c4c8b46-beb4-4655-9d90-d1d74598169b
date: '2024-07-02 00:58:00'
updated: '2024-07-02 01:01:00'
image: 'https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb'
published: 2024-07-01T08:00:00.000Z
---

One of Golang's steepest learning curves is how to use channels.


At the practical level, channels are locked, buffered queues. Their API matches that of a queue, the implementation is a queue, and I find it easiest to write and read channel code with this abstraction.


But it is not enough to know how the channel API works. You also need to be comfortable with the channel ecosystem. Channels usually depend on errorgroups, goroutines, and other concurrency primitives.


Lastly, understanding how the Go runtime manages channels is important when comparing implementations. In some cases, channels add unnecessary overhead compared to mutexes or atomics. But alternatives to channels can disagree with the Golang runtime in ways that make source code clunky and hamper performance.


![max-channel-abstractions.png](https://www.dolthub.com/blog/static/c640141a342a471bdcdf2e68945092b0/ad12c/max-channel-abstractions.png)


Segmenting these concerns helps me focus on the right things at the right time. When I want to write channel code that works, I think "queues". When I need my channel code to stop running, I compare concurrency patterns for tracking threads. When I want to compare performance and safety, the theoretical concerns matter.


We will deep dive these topics to get a better understanding of each.


# **Queue with a lock**

> "you can think [of] it as a box in which you put a[n] item at one end and then pick it from other end." https://stackoverflow.com/questions/39826692/what-are-channels-used-for

Channels are implemented as a queue with lock-protected access. Senders try to add to the queue. Receivers try to read from the queue. The queue size is fixed. Senders can pile up waiting to add to the queue, and receivers can pile up competing for the next item. The sender and receiver queues (as opposed to the message queue), sit in linked lists. The Go runtime parks and signals senders and receivers manually to avoid, for example, a sender wasting time spinning on a full queue while a receiver could be doing work.


![max-channel-queue.png](https://www.dolthub.com/blog/static/929347d5ab95c8ec9090c0cb50aa7032/ad12c/max-channel-queue.png)


Here is how you send work to a channel:


`func send(w Work, ch chan Work) {
    ch <- w
}`


Here is how you read from a channel:


`func recv(ch chan Work) (Work, bool) {
    w, ok := <-ch
    return w, ok
}`


Which is similar to appending/removing from a queue:


`func (q *Queue) send(w Work) {
    q = append(q, w)
}

func (q *Queue) recv() (Work, bool) {
    if len(q) == 0 {
        return nil, false
    }
    w := q[0]
    q = q[1:]
    return w, true
}`


Because channel operations can block, a `select` statement is often used to expand our options when a channel is full. Below we try to send work to the channel, but fallthrough if the channel is full:


`func trySend(w Work, ch chan Work) (success bool) {
    select {
    case ch <-w:
        return true
    default:
        return false
    }
}`


Similarly, extra channels can provide an escape hatch if we want to block until a related component decides we should stop:


`func sendWithEscapeHatch(w Work, ch chan Work, done chan struct{}) bool {
    select {
    case ch <- w:
        return true
    case <-done:
        return false
    }
}

func escapeHatch(done chan struct{}) {
    close(done)
}`


The [**full channel implementation**](https://go.dev/src/runtime/chan.go) has a lot of subtle details. But I really find "what would a queue do" helpful when writing code:

- Writing to a full queue -> sender waits in line
- Reading from an empty queue -> reader waits in line
- Reading from a closed queue -> read values until empty
- Writing to a closed queue -> your application is doing something wrong, either we missed work, or the program should be interrupting writers
- Closing a nil or previously closed channel -> you app is doing something wrong

# **Concurrency Language Primitives**

> "channels and goroutines are the primitives on top of which most of concurrent golang code is built." https://www.reddit.com/r/golang/comments/103undh/comment/j31qtug/

The second way to think about channels is not as their own isolated abstraction, but as one fundamental component in the Go ecosystem of concurrency controls. To use channels to write concurrent code, you need to understand the other primitives as well.


## **Goroutines**


We mentioned [**goroutines**](https://go.dev/tour/concurrency/1) and [**select blocks**](https://go.dev/tour/concurrency/5) in the last section, which are ways to decouple a linear program into concurrent segments:


`go func() {
    fmt.Println("thing 1")
}()
go func() {
    fmt.Println("thing 2")
}()`


It is non-deterministic whether "thing 1" or "thing 2" is printed first in the example above. Both functions are ran in new threads separate from the original calling context. In the context of channels, we often run `send` and `recv` operations in separate goroutines because the Go runtime switches contexts depending on where work is building up.


`ch := make(chan Work)

go recv(ch)

for _, w := range work {
    go send(w, ch)
}`


## **Timing**


[**Timeouts**](https://go.dev/wiki/Timeouts) and [**tickers**](https://gobyexample.com/tickers) are two ways to extend select blocks with time-based logic. The example below uses a `ticker` to send one item a second.


`ticker := time.NewTicker(1 * time.Second)
for _, w := range work {
    select {
    case <-ticker.C
        ch <- w
    }
}`


We do the same thing with a timeout below:


`for _, w := range work {
    select {
    case <-time.After(1 * time.Second):
        ch <- w
    }
}`


Tickers can rate-limit the throughput of channels, and timers can be used to interrupt work that is taking too long to finish.


## **WaitGroups**


[**Wait groups**](https://pkg.go.dev/sync#example-WaitGroup) and [**error groups**](https://pkg.go.dev/golang.org/x/sync/errgroup#example-Group-JustErrors) are two ways to coordinate thread shutdown. We have already noted the `done` pattern, which lets us kill straggler senders/receivers when the runtime decides we want to exit:


`select {
case ch <- w:
    return true
case <-done:
    return false
}`


If we know the amount of work ahead of time and are unconcerned with errors, wait groups block a main process until a fixed set of concurrent threads finish:


`func sumRange(n int) int {
	var wg sync.WaitGroup
	work := make(chan int)
	res := make(chan int)
	go func() {
		var sum int
		for {
            // Accumulate until channel closed and empty
			select {
			case i, ok := <-work:
				if !ok {
					res <- sum
					return
				}
				sum += i
			}
		}
	}()
	for i := 0; i < n; i++ {
		wg.Add(1) // increment work counter
		i := i
		go func() {
			work <- i
			wg.Done() // decrement work counter
		}()
	}
	wg.Wait()    // unblocks when counter is zero
	close(work)  // senders are finished, safe to close
	return <-res // res populated after queue is drained
}`


We divide senders and receivers into two pools above. The senders increment and decrement from a WaitGroup to signal work in progress. The receiver is a single goroutine that accepts work from the senders. When the senders have finished sending work, `wg.Wait()` unblocks. At that point, no more work will be added to the queue, so we close the work channel. We use a final result channel `res` to let the receiver finish adding values before returning.


The code is [**here**](https://go.dev/play/p/Hbk6cwlsnYa) if you would like to run yourself.


## **Error Groups**


While `done` and `WaitGroup` have their place, it is rare for an application to know much about its shutdown routine in advance. In our experience, shutdown usually occurs unpredictably, and we need to combine primitives to gracefully (1) kill senders, (2) flush the queue, and (3) kill receivers.


`type counter struct {
    work chan int
    res chan int
    eg *errgroup.Group
}

func newCounter(ctx context.Context) *counter {
	eg, _ := errgroup.WithContext(ctx)
	c := &counter{
		work: make(chan int),
		res:  make(chan int),
		eg:   eg,
	}
	go c.recv(ctx)
	return c
}

func (c *counter) recv(ctx context.Context) error {
	sum := 0
	for {
		select {
		case i, ok := <-c.work:
			if !ok {
				c.res <- sum
				return nil
			}
			sum += i
		case <-ctx.Done():
			return context.Cause(ctx)
		}
	}
}

func (c *counter) send(ctx context.Context, n int) {
	c.eg.Go(func() error {
		for i := 0; i < n; i++ {
			select {
			case c.work <- i:
			case <-ctx.Done():
				return context.Cause(ctx)
			}
		}
		return nil
	})
}

func (c *counter) finalize() (int, error) {
	if err := c.eg.Wait(); err != nil {
		return 0, err
	}
	close(c.work)
	return <-c.res, nil
}

func main() {
    ctx := context.Background()
    c := newCounter(ctx)
    c.send(ctx, 10)
    c.send(ctx, 10)
    c.send(ctx, 10)
    sum, err := c.finalize()
}`


Our queue is again divided between senders and workers. Now the senders use the error group `eg` instead of a wait group to coordinate with one another. The receiver thread still pulls work from the queue accumulating results. Shutdown also works similarly. `finalize()` blocks until in-progress senders have finished their work. Once senders are finished, we are safe to `close(c.work)`. And the receiver will populate the result channel after draining the queue.


The main difference is that we may have unbounded work. The `counter` organization accounts for an arbitrary number of `send` calls before `finalize`.


Unbounded work also opens up a number of failure cases. If the `ctx` is canceled, `<-ctx.Done()` returns immediately. Senders and receivers shutdown early, the error group will accept no new work, and the call to `finalize` will return the first error encountered.


There are other ways we could manage shutdown in this last example. We could have two separate error groups to track senders and receivers. We could use a `done` channel for receiver errors to signal for senders to stop (or at least avoid blocking). We don't always want to interrupt a whole process just because one component fails. The code can be run/edited [**here**](https://go.dev/play/p/qoQWZceFKTo).


Choosing the right organizational pattern and set of primitives can be a bit of an art. [**This blog implements a number squaring function**](https://go.dev/blog/pipelines) in a variety of ways using the same primitives, to give a second example of implementation tradeoffs.


# **Message passing**

> "Go channels are modeled on Hoare's Communicating Sequential Processes, a process algebra for concurrency that is oriented around event flows between communicating actors" https://stackoverflow.com/a/13602361

If you are still here, you have probably seen the channel call to action:

> don't communicate by sharing memory, share memory by communicating

I don't know about you, but this doesn't exactly get me in the mood. Keeping two mental models for the queue implementation/API and the language-specific syntax is hard enough without this third layer of complexity. But this is the canonical channel quote, we have to unpack it.


One literal interpretation of Pike's quote is that message passing is different than sharing memory for pedantic reasons. Copying values between sender/receiver stacks is safer than sharing memory. But it is also possible to send values with pointers into channels, so that doesn't really prevent developers from abusing the model. I don't think avoiding shared memory is a top of mind consideration for developers deciding whether to use channels.


The second observation is that the Golang developers didn't put so much effort into channels just to be equivalent to a user-implemented queue. Golang's control over runtime Goroutines makes the channel implementation very efficient. Go's runtime can pause and resume threads depending on where there is work to be done. Concurrency adds a fixed overhead of context switching, but it would be difficult for a user queue implementation to be as performant.


Embedding channels into the language runtime also makes it easier to write more aggressively concurrent code. The channel ecosystem makes them harder to learn, but it also lets you do a lot more.


[**Aaron's**](https://www.dolthub.com/team#aaron) recent [**fetcher refactor**](https://www.dolthub.com/blog/2024-05-08-dolt-new-puller/) is one example where almost a dozen channel contexts coordinate to download table updates. The implementation [**in the code**](https://github.com/dolthub/dolt/blob/b4492803f152878a91e6c9f49c2262decf22f55a/go/libraries/doltcore/remotestorage/chunk_fetcher.go#L65) is only concise because the channel API abstracts so many details. And the Go runtime's smart context switching makes it possible to maximize productive work in-between network calls.


![old_puller_sequence_uml.png](https://www.dolthub.com/blog/static/09749f17ede13df6fc1a2a2fbdd69dbf/ad12c/old_puller_sequence_uml.png)


# **Summary**


I find channels easiest to understand as a queue abstraction. But channels on their own are not enough. Real applications depend on the set of concurrency primitives in Golang. And lastly, channels usually abstract details that that make developers lives easier in a way that is also more performant than other concurrency options.


All of these abstractions are useful! But they are often useful in different contexts.

