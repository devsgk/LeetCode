/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
  const totalCols = strs[0].length;
  const totalStrs = strs.length;
  const arr = [];

  for (let i = 0; i < totalCols; i++) {
    for (let j = 0; j < totalStrs; j++) {
      let charCode = strs[j][i].charCodeAt();

      arr.push(charCode);
    }
  }

  let count = 0;

  const arr2 = [];

  while (count < arr.length) {
    const chunk = arr.slice(count, count + totalStrs);
    arr2.push(chunk);
    count += totalStrs;
  }

  let result = 0;

  for (const arr of arr2) {
    for (let i = 0; i < arr.length; i++) {
      const cur = arr[i];
      const next = arr[i + 1];
      if (cur > next) {
        result++;

        break;
      }
    }
  }

  return result;
};
