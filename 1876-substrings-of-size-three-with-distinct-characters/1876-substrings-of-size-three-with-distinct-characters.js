/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
  const candidates = [];
  let count = 0;
  
  for (let i = 0; i < s.length; i++) {
    const subString = s.slice(i, i + 3);
    
    candidates.push(subString);
  }
  
  for (const candidate of candidates) {
    const set = new Set(candidate);

    if (set.size === 3) {
      count++;
    }
  }
  
  return count;
};
