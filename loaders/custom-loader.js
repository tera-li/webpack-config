module.exports = (source) => {
  // 返回 loader 处理后结果
  return source.replace("source", "loader处理后的结果");
};
