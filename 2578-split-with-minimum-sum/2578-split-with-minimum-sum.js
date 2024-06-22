/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function(num) {
  const arr = String(num).split("").sort((a, b) => a - b);
  let num1 = "";
  let num2 = "";
  
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) num1 += arr[i];
    else num2 += arr[i];
  }
  
  return Number(num1) + Number(num2);
};