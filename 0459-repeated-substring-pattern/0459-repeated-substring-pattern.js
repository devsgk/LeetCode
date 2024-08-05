/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  const duplicate = s + s;
  const modified = duplicate.slice(1, -1);
  
  return modified.includes(s);  
};