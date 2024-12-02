/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const freq1 = {};
  const freq2 = {};
  
  for (const char of ransomNote) {
    freq1[char] = freq1[char] ? freq1[char] + 1 : 1;
  }
  
  for (const char of magazine) {
    freq2[char] = freq2[char] ? freq2[char] + 1 : 1;
  }
  
  for (const [key, value] of Object.entries(freq1)) {
    if (!freq2[key]) return false;
    if (freq2[key] < freq1[key]) return false;
  }
  
  return true;
};
