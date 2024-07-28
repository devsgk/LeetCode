/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const isNegative = x < 0;
  const reversed = Math.abs(x).toString().split("").reverse().join("");
  let result = x < 0 ? -Number(reversed) : Number(reversed);
  
  if (result > 2**31 - 1 || result < -(2**31)) {
    return 0;
  }
  
  return result;
};