/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
  const obj = {};
  
  for (const char of s) {
    obj[char] = obj[char] ? obj[char] + 1 : 1;
  }

  const set = new Set();
  
  for (const value of Object.values(obj)) {

    set.add(value);
  }
  
  return set.size === 1;
};
