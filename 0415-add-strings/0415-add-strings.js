/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  let sum = "";
  
  while (i >= 0 || j >= 0 || carry > 0) {
    const digit1 = i < 0 ? 0 : num1.charAt(i) - "0";
    const digit2 = j < 0 ? 0 : num2.charAt(j) - "0";
    const digitSum = digit1 + digit2 + carry;
    
    sum = (digitSum >= 10 ? digitSum % 10 : digitSum) + sum;
    carry = digitSum >= 10 ? 1 : 0;
    
    i--;
    j--;
  }
  
  return sum;
};