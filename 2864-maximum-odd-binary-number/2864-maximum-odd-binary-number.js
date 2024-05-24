/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
  let count = 0;
  let result = "";
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") count++;
  }
  
  for (let i = 0; i < s.length; i++) {
    if (count > 1) {
      result += "1";
      count--;
    } else if (i === s.length - 1) {
      result += "1";
    } else {
      result += "0";
    }
  }
  
  return result;
};