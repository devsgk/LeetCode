/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
  const lower = s.toLowerCase();
  let count = 0;
  
  for (let i = 0; i < lower.length; i++) {
    if (lower[i] !== lower[i - 1] && lower[i - 1] !== undefined) {
      count++;
    }
  }
  
  return count;
};