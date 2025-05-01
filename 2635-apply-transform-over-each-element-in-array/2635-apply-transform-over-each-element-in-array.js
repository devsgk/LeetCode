/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
  const newArr = [];

  arr.forEach((el, i) => newArr[i] = fn(el, i));

  return newArr;
};