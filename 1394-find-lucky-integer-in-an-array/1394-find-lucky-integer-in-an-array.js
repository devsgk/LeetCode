/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
  const obj = {};
  let max = -Infinity;

  for (const num of arr) {
    obj[num] = obj[num] ? obj[num] + 1 : 1;
  }
  

  for (const [key, value] of Object.entries(obj)) {
    if (Number(key) === value) {
      max = Math.max(max, key);
    }
  }
  
  return max === -Infinity ? -1 : max;
};
