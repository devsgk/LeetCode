/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var satisfiesConditions = function(grid) {
  let obj = {};

  for (let i = 0; i < grid[0].length; i++) {
    obj[i] = grid[0][i];
  }

  function checkFirstCondition(arr) {
    let isValid = true;

    for (let i = 0; i < arr.length; i++) {
      if (obj[i] !== arr[i]) {
        isValid = false;

        break;
      }
    }

    return isValid;
  }

  function checkSecondCondition(arr) {
    let isValid = true;

    for (let i = 0; i < arr.length - 1; i++) {
      const cur = arr[i];
      const next = arr[i + 1];
      if (cur === next) {
        isValid = false;

        break;
      }
    }

    return isValid;
  }
  
  for (const arr of grid) {
    const result1 = checkSecondCondition(arr);
    const result2 = checkFirstCondition(arr);
    if (!result1 || !result2) return false;
  }

  return true;
};
