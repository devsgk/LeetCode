/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
var generateKey = function(num1, num2, num3) {
  const str1 = String(num1).padStart(4, "0");
  const str2 = String(num2).padStart(4, "0");
  const str3 = String(num3).padStart(4, "0");
  let result = "";
  
  for (let i = 0; i < 4; i++) {
    const min = Math.min(str1[i], str2[i], str3[i]);
    
    result += min;
  }
  
  return Number(result);
};
