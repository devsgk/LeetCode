/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
  let max = 0;
  
  for (const str of strs) {
    const isNotNumber = isNaN(str);
    
    if (isNotNumber) {
      max = Math.max(max, str.length);
    } else {
      max = Math.max(max, Number(str));
    }
  }
  
  return max;
};
