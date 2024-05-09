---
category: DOTNET
tags:
  - CSharp
  - Blazor
status: 已发布
time: '2023-12-02 08:00:00'
day: '2023-12-02'
catalog: []
slug: net-8-blazor-snake-game
title: .NET 8 Blazor Snake Game
urlname: eddbd7c9-609b-4774-912a-e1b1aedf53f4
updated: '2024-05-09 23:17:00'
image: 'https://www.notion.so/images/page-cover/webb4.jpg'
published: 2023-12-03T22:29:00.000Z
---

# Mini Snake Game 


贪吃蛇游戏是一款休闲益智类游戏，有 PC 和手机等多平台版本。既简单又耐玩。该游戏通过控制蛇头方向吃蛋，从而使得蛇变得越来越长。


### 游戏板


在razor面板创建游戏界面

1. 创建Snake.razor

```markup
<divclass="game-container"tabindex="0"@onkeydown="ControlSnakeDirection">
    @for (int row = 0; row < NO_OF_ROWS; row++)
    {
        @for (int col = 0; col < N0_OF_COLS; col++)
        {
            bool isSnakeCell = IsSnakeCell(row, col);
            bool isSnakeHead = IsSnakeHead(row, col);
            bool isFoodCell = IsFoodCell(row, col);

            <divclass="cell @(isSnakeCell && !isSnakeHead ? "snake-body":"")">
                @if (isSnakeCell)
                {
                    @if (isSnakeHead)
                    {
                        <span>🐲</span>
                    }
                    else
                    {
                        <span>●</span>
                    }
                }
                @if (isFoodCell)
                {
                    <span>🍎</span>
                }
            </div>
        }
    }
</div>
```


### 代码**解释**


在第 3 行，每次玩家按下键盘上的箭头键时，我们都会调用“`ControlSnakeDirection()`”方法。此方法控制蛇响应用户输入的移动。但我们如何确定前进的方向呢？


1.  我们有 `Direction` 枚举，这是一种表示蛇的运动选项的简洁方式。


```c#
public enum Direction
    {
        UP = 0,
        RIGHT = 1,
        DOWN = 2,
        LEFT = 3
    }
}
```


2.  接下来，在第 4 行和第 6 行，我们使用两个嵌套循环来构建游戏板，有效地将页面划分为 15x15 部分的网格。循环变量由静态类 `GameHelper` 填充，该静态类保存与游戏相关的基本信息。


```c#
public static class GameHelper
	{
		public const int NO_OF_ROWS = 15;
		public const int N0_OF_COLS = 15;
       public const int SNAKE_SPEED = 600;
   }
```


3.  通过这三种方法，我们的游戏变得生动起来。

1. `IsSnakeCell(row, col)`：检查给定行和列坐标处的当前单元格是否属于蛇的身体。它返回一个布尔值，表明该细胞是否是蛇身体的一部分。
2. `IsSnakeHead(row, col)`：与上一个方法类似，该方法验证当前单元格是否代表蛇的头。
3. `IsFoodCell(row, col)`：该方法检测当前单元格是否包含美味的苹果🍎。

4.  棋盘上的每个单元格都被分配了一个用途 - 它要么是蛇的头 (🐲)、蛇的身体 (●)、诱人的苹果 (🍎) 或空单元格。


我们应用于每个单元格的 CSS 类不仅仅是样式 - 它们是让我们的游戏栩栩如生的视觉提示。如果一个单元格属于蛇的身体（但不是头部），我们给它“`snake-body`”类，并用绿色背景绘制它。同时，“`cell`”类应用于每个单元格，从而产生填充板上的那些迷人的框。


```c#
<div class="cell @(isSnakeCell && !isSnakeHead ? "snake-body" : "")">
```


4.1. 如果“`isSnakeHead`”为 `true`，则显示蛇头的龙表情符号 (🐲) 或蛇身体的点 (●)。


```c#
@if(isSnakeCell)
{
    @if(isSnakeHead)
    {
        < span >☃️</ span >
    }
    else
    {
       < span >🐧</ span >
    }
}
```


4.2. 如果 `isFoodCell` 为 `true`，它会显示一个苹果表情符号 🍎 来代表食物。


```c#
@if (isFoodCell)
{
    <span>🍎</span>
}
```


### 记录分数


如果没有办法跟踪您的进度，游戏就不算完整。 “`CurrentScore`”和“`TopScore`”字段位于屏幕顶部，为您提供实时跟踪。


为了管理分数，我们引入了包含两个基本字段的 `Score` 类。

1. `CurrentScore`：随着您累积积分，此字段会在整个游戏过程中更新。
2. `TopScore`：最高成就，该字段记录您在游戏中取得的最高分。

游戏成绩


```c#
public class Score
{
    public int CurrentScore;
    public int TopScore;
}
```


### 逻辑：Blazor.razor.cs 背后的代码


在幕后的 `Blazor.razor.cs` 文件中，隐藏着我们游戏的核心——控制蛇的每一个动作、管理游戏状态并处理用户输入的逻辑。


### 字段和属性

- `currentCell`：该字段表示蛇在游戏板上的当前位置，存储为具有行和列坐标的 `SnakeCell` 类的实例。
- `SnakeBody`：一个列表，记录了蛇身体所占据的每个单元格的位置。
- `Score`：前面介绍的 `Score` 类的实例，包含 `CurrentScore` 和 `TopScore`。
- `isGameOver`：一个布尔标志，用于监视游戏是否已结束或仍在进行中。
- `SnakeDirection`：一个枚举字段（Direction），保留蛇当前的移动方向 - 向上、向右、向下或向左。
- `foodRow` 和 `foodCol`：整数字段，用于精确定位食物在游戏板上的当前位置。

```c#
public class SnakeCell
{
    public int Row { get; set; }

    public int Col { get; set; }
}

public partial class Snake
{
      SnakeCell currentCell;

      readonly List<SnakeCell> snakeBody = new();

      Score score = new();

      bool isGameOver;

      // Define the Snake's initial direction
      Direction snakeDirection = Direction.RIGHT;

      // Define the food's initial position
      int foodRow = 5;
      int foodCol = 5;

}
```


### 初始化和游戏循环


`OnInitializedAsync()`：当组件首次初始化时会触发此方法。它通过初始化基本参数并通过 StartGame 方法启动游戏循环来为我们的游戏奠定基础。


```c#
protected override async Task OnInitializedAsync()
{
    InitializeGame();
    await StartGame();
}
```


`InitializeGame()`：游戏参数的摇篮！这种方法产生了一些基本元素，例如蛇的起始位置、得分，当然还有食物的位置。


```c#
private void InitializeGame()
{
    // Define the Snake's initial position
    currentCell = new() { Row = 10, Col = 10 };

    // Initialize the snake's size to 1
    score.CurrentScore = 1;

    // Initialize the snake's body with one cell at the starting position
    snakeBody.Add(CloneSnakeCell());

    // Generate the initial food
    GenerateFood();
}
```


`StartGame()`：一个不断更新游戏状态的异步动力源。它控制蛇的移动，检查碰撞，并不知疲倦地奔跑，直到游戏结束。


```c#
private async Task StartGame()
{
    // Start the game loop
    while (!isGameOver)
    {
        UpdateSnakeDirection();
        if (IsFoodFound())
        {
            score.CurrentScore++;
            GenerateFood();
        }
        await Task.Delay(SNAKE_SPEED);
        StateHasChanged();
    }
}
```


### 游戏逻辑


`ControlSnakeDirection()`：一种处理用户输入的方法，确保蛇根据箭头键按下适当地改变方向。如果您还记得清单 1，我们会在 **@KeyDown** 事件上调用此方法。


```c#
private void ControlSnakeDirection(KeyboardEventArgs e)
{
    switch (e.Key)
    {
        case "ArrowUp":

            snakeDirection = Direction.UP;
            break;
        case "ArrowRight":

            snakeDirection = Direction.RIGHT;
            break;
        case "ArrowDown":

            snakeDirection = Direction.DOWN;
            break;
        case "ArrowLeft":

            snakeDirection = Direction.LEFT;
            break;
    }
}
```


`UpdateSnakeDirection()`：这个方法是我们游戏的引擎，根据蛇的当前方向管理蛇的位置更新。然后增加蛇的大小，并检查游戏是否结束。


```c#
private void UpdateSnakeDirection()
{
    switch (snakeDirection)
    {
        case Direction.UP:
            currentCell.Row--;
            break;
        case Direction.RIGHT:
            currentCell.Col++;
            break;
        case Direction.DOWN:
            currentCell.Row++;
            break;
        case Direction.LEFT:
            currentCell.Col--;
            break;
    }

    // Add the new current Cell to the  of the snake's body
    snakeBody.Insert(0, CloneSnakeCell());

    //Check if Game is over
    IsGameOver();

    // Remove the last cell (tail) to maintain the snake's size
    if (snakeBody.Count > score.CurrentScore)
    {
        snakeBody.RemoveAt(snakeBody.Count - 1);
    }
}
```


`IsGameOver()`：游戏结束条件的守护者！它会监视与游戏板边界的碰撞，并为玩家提供重置游戏或探索我的网站 https://rikampalkar.github.io 的选择。


```c#
private async Task IsGameOver()
{
    if (currentCell.Row < 0 || currentCell.Row >= NO_OF_ROWS || currentCell.Col < 0 || currentCell.Col >= N0_OF_COLS)
    {
        isGameOver = true;
        bool isResetGame = await js.InvokeAsync<bool>("ResetGamePopup", score.CurrentScore);
        if (isResetGame)
        {
            if (score.CurrentScore > score.TopScore)
            {
                score.TopScore = score.CurrentScore;
            }
            ResetGame();
        }
        else
        {
            await js.InvokeVoidAsync("navigateToWebsite", $"https://rikampalkar.github.io/");
        }
    }
    isGameOver = false;
}
```


`ResetGame()`：当玩家决定重新开始时，此方法负责为新的游戏会话清除记录。


```c#
private void ResetGame()
{
    snakeBody.Clear();
    isGameOver = false;
    OnInitializedAsync();
}
```


`GenerateFood()`：幕后主厨！此功能会在游戏板上的随机位置烹制一批新食物。


```c#
private void GenerateFood()
{
    var random = new Random();
    foodRow = random.Next(0, NO_OF_ROWS);
    foodCol = random.Next(0, N0_OF_COLS);
}
```


`CloneSnakeCell()`：此方法克隆当前细胞的位置，作为蛇体细胞的蓝图。


```c#
private SnakeCell CloneSnakeCell()
{
     return new SnakeCell() { Row = currentCell.Row, Col= currentCell.Col };
}
```


### CSS 方法


如果没有通过这些私有方法为您带来的视觉效果，我们的游戏将是不完整的。他们决定细胞在游戏板上的显示方式，确保蛇身、蛇头和食物恰到好处地突出。通过这些私有方法与razorUI通信


```c#
//This method checks whether the cell at the given row and col coordinates belongs to the snake's body.
private bool IsSnakeCell(int row, int col)
{
    return snakeBody.Exists(cell => cell.Row == row && cell.Col == col);
}

//This method checks whether the cell at the given row and col coordinates matches the position of the food
private bool IsFoodCell(int row, int col)
{
     return row == foodRow && col == foodCol;
}

// Function to check if a cell is the snake head
private bool IsSnakeHead(int row, int col)
{
      return row == snakeBody[0].Row && col == snakeBody[0].Col;
}

// Check for collision between the Snake and food
private bool IsFoodFound()
{
      return currentCell.Row == foodRow && currentCell.Col == foodCol;
}
```


**源代码**


[link_preview](https://github.com/DerickIT/moni-blazorwasm-.net8-hack)

