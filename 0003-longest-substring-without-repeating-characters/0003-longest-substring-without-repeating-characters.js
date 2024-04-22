/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) return 0;
  
  const result = [];
  
  for (let i = 0; i < s.length; i++) {
    const arr = [];
    
    arr.push(s[i]);
    
    for (let j = i + 1; j < s.length; j++) {
      if (!arr.includes(s[j])) {
        arr.push(s[j]);

      } else {
        break;
      }
    }
    
    result.push(arr.length);
  }
  
  return Math.max(...result);
};