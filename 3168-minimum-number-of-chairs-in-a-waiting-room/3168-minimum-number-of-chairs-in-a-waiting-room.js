/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function(s) {
  let max = 0;
  let ans = 0;
  
  for (let i = 0; i < s.length; i++) {
    
    if (s[i] === "E") {
      max++;
    } else {
      max--;
    }
    
    ans = Math.max(max, ans);
  }
  
  return ans;
};