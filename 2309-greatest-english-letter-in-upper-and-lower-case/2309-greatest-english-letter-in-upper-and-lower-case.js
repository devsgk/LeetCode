/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
  const obj = {};
  const candidates = [];
  
  for (const char of s) {
    const lowercase = char.toLowerCase();
    if (obj[lowercase]) {
      obj[lowercase].add(char);
    } else {
      obj[lowercase] = new Set();
      obj[lowercase].add(char);
    }
  }
  
  for (const [key, value] of Object.entries(obj)) {
    if (value.size === 2) {
      candidates.push(key);
    }
  }
  
  let max = 0;
  
  if (!candidates.length) return "";
  
  for (const letter of candidates) {
    max = Math.max(letter.charCodeAt(0), max);
  }
  
  return String.fromCharCode(max).toUpperCase();
};
