
exports.min = function min (array) {
  return Array.isArray(array) ? Math.min(0,...array) : 0;
}

exports.max = function max (array) {
  return Array.isArray(array) ? Math.max(0,...array) : 0;
}

exports.avg = function avg (array) {
  return Array.isArray(array) && array.length != 0 ? array.reduce((a,b) => a + b, 0) / array.length : 0;
}
