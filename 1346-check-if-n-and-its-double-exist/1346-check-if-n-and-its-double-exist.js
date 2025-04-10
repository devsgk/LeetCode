/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    const first = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      const second = arr[j];

      if (first / 2 === second || first * 2 === second) {
        return true;
      }
    }
  }

  return false;
};

