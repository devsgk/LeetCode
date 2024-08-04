/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let start = 1;
  let end = num;
  let mid = Math.floor((start + end) / 2);
  
  while (start <= end) {
    if (mid ** 2 < num) {
      start = mid + 1;
      mid = Math.floor((start + end) / 2);
    } else if (mid ** 2 > num) {
      end = mid - 1;
      mid = Math.floor((start + end) / 2);
    } else {
      return true;
    }
  }
  
  return false;
};