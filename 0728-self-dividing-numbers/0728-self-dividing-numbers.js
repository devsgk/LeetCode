/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  const result = [];
  
  for (let i = left; i <= right; i++) {
    const number = i;
    const digits = number.toString().split("");
    
    result.push(number);
    
    for (const digit of digits) {
      if (number % digit !== 0) {
        result.pop();
        
        break;
      }
    }
  }
  
  return result;
};