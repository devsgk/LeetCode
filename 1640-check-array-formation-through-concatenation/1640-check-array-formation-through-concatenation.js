/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];

    for (const item of pieces) {
      const firstNum = item[0];

      if (cur === firstNum) {
        if (obj[firstNum]) {
          obj[firstNum].push(...item);
        } else {
          obj[firstNum] = [...item];
        }
      }
    }
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];
    if (obj[cur]) {
      const popped = obj[cur]?.join("")

      result.push(popped);
    }
  }

  return arr.join("") === result.join("") ? true : false;
};
