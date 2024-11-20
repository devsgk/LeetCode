/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKConstraintSubstrings = function(s, k) {
  let res = 0
  const n = s.length
    
  for (let i = 0; i < n; i++) {
    let z = 0;
    let o = 0;
    
    for (let j = i; j < n; j++) {
      if (s[j] == '0') {
        z++;
      } else {
        o++;
      }
      
      if (z <= k || o <= k) {
        res++;
      }
    }
  }
  
  return res;
};
