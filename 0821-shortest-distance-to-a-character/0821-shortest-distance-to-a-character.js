/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
  const eArray = [];
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      eArray.push(i);
    }
  }
  
  const ans = [];
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== c) {
      let minDistance = s.length - 1;
      for (const index of eArray) {
        const distance = Math.abs(index - i);
        
        minDistance = Math.min(minDistance, distance);
      }
      ans.push(minDistance);
    } else {
      ans.push(0);
    }
  }
  
  return ans;
};