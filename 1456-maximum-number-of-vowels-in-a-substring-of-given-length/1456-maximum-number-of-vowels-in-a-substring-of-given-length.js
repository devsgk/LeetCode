/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
  const vowels = ["a", "e", "i", "o", "u"];
  let left = 0;
  let right = 0;
  let count = 0;
  let max = 0;
  
  for (let right = 0; right < s.length; right++) {
    if (vowels.includes(s[right])) {
      count++;
    }
    
    if (right > left + k - 1) {
      if (vowels.includes(s[left])) {
        count--;
      }
      
      left++;
    }
    
    if (count > max) {
      max = count;
    }
    
    if (count === k) {
      return k;
    }
  }
  
  return max;
};