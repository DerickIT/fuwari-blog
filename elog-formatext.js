const { matterMarkdownAdapter } = require("@elog/plugin-adapter");

/**
 * 自定义文档处理器
 * @param {DocDetail} doc doc的类型定义为 DocDetail
 * @return {string} 返回处理后的文档内容字符串
 */
const format = (doc) => {
  if (doc.properties) {
    let properties = doc.properties

    // 将 cover 属性修改为 image
    if (properties.hasOwnProperty("cover")) {
      properties.image = properties.cover;
      properties.published = new Date(properties.time);
      delete properties.time;
      delete properties.cover;
    }

    // 将 date 属性修改为 published，并进行类型转换
    // if (properties.hasOwnProperty("date")) {
    //   const dateValue = properties.date;
    //   const publishedValue = dateValue.slice(1, 11); // 提取日期部分，例如 "2024-05-08"
    //   properties.published = publishedValue;
    //   delete properties.date;
    // }

    for (var key in properties) {
      if (properties.hasOwnProperty(key) && properties[key] === "") {
        delete properties[key];
      }
    }
  }

  return matterMarkdownAdapter(doc);
};

module.exports = {
  format,
};