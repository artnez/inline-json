module.exports = function inline(value) {
  return JSON.stringify(value)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
    .replace(/<\//g, '<\\/')
    .replace(/<\//g, '<\\/');
};
