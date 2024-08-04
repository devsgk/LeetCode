/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (num === 1) return true;
  let root = 1;
  
  while (root <= num / 2) {
    if (root ** 2 === num) {
      return true;
    }
    
    root++;
  }
  
  return false;
};