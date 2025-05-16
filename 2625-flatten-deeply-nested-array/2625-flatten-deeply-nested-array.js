/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  if (n === 0) return arr;

  let count = 0;
  let result = [...arr];

  while (count < n) {
    const temp = [];

    for (const el of result) {
      if (Array.isArray(el)) {
        temp.push(...el);
      } else {
        temp.push(el);
      }

    }

    count++;
    result = temp;
  }

  return result;
};
