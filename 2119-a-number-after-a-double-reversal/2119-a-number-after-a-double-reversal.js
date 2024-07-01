/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
  const str = String(num);
  
  if (str.length === 1) {
    return true;
  }
  
  if (str.at(-1) === "0") {
    return false;
  }
  
  return true;
};