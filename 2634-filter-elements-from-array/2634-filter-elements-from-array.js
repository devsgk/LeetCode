/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
  const newArr = [];

  arr.forEach((el, i) => {
    const newVal = fn(el, i);

    if (Boolean(newVal)) newArr.push(el);
  });

  return newArr;
};
