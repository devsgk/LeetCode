/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
  let str = "";
  let count = 0;
  
  for (const letter of s) {
    str += (letter.charCodeAt(0) - 96);
  }
  
  let sum = 0;
  
  while (count < k) {
    
    for (const digit of str) {
      sum += Number(digit);
    }
  
    str = String(sum);
    sum = 0;
    count++;
  }
  
  return Number(str);
};
