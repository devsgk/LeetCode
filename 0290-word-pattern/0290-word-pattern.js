/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const patternLength = [... new Set(... pattern.split(" "))].length;
  const sLength = [... new Set(s.split(" "))].length;
  
  if (patternLength !== sLength) return false;
  
  const obj = {};
  const arr = s.split(" ");
  let result = [];

  for (let i = 0; i < pattern.length; i++) {
    obj[pattern[i]] = arr[i];
  }
  
  for (let i = 0; i < pattern.length; i++) {
    result.push(obj[pattern[i]]);
  }
  
  return arr.join(" ") === result.join(" ");
};