/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const obj = {};
  
  for (const letter of s) {
    obj[letter] = obj[letter] ? obj[letter] + 1 : 1;
  }
  
  let length = 0;
  let oddFound = false;
  
  for (const [key, value] of Object.entries(obj)) {
    if (value % 2 === 0) {
      length += value;
    } else {
      length += value - 1;
      oddFound = true;
    }
  }
  
  if (oddFound) {
    length += 1;
  }
  
  return length;
};