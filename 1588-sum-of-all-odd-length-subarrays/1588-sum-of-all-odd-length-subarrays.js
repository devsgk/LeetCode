/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
  let count = 1;
  let result = 0;
  
  while (count <= arr.length) {
    for (let i = 0; i < arr.length; i++) {
      const subArr = arr.slice(i, i + count);
      
      if (i + count <= arr.length) {
        result += subArr.reduce((acc, cur) => acc + cur, 0);
      }
    }
    count += 2;
  }
  
  return result;
};