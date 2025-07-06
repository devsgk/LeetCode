/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
  const map = new Map();

  for (const peice of pieces) {
    map.set(peice[0], peice)
  }

  for (let i = 0; i < arr.length;) {
    const cur = arr[i];
    const peice = map.get(cur);

    if (!peice) return false;

    for (let j = 0; j < peice.length; j++) {
      if (arr[i + j] !== peice[j]) return false;
    }

    i += peice.length;
  }

  return true;
};
