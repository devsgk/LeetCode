/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
  const array = s.split(" ");
  const result = array.slice(0, k).join(" ");
  
  return result;
};