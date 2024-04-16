/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
  let sum = 0;
  
  for (let i = 0; i < s.length - 1; i++) {
    const code = s[i].charCodeAt();
    const nextCode = s[i + 1].charCodeAt();
    
    sum += Math.abs(code - nextCode)
  }
  
  return sum;
};