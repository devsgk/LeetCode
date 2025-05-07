/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
  const chunked = [];
  const result = [];

  while (arr.length) {
    const sub = arr.splice(0, size);
    
    result.push(sub);
  }

  return result;
};
