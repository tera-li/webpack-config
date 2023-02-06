module.exports = (source, map, meta) => {
  // 返回 loader 处理后结果，return buffer or string
  return source.replace("source", "loader处理后的结果...");
};
