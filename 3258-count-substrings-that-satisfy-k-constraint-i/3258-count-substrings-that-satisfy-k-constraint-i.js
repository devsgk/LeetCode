/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKConstraintSubstrings = function(s, k) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      const sub = s.slice(i, j);
      const lengthOfOnes = sub.split("").filter(el => el === "1").length;
      const lengthOfZeros = sub.split("").filter(el => el === "0").length;
      
      if (lengthOfOnes <= k || lengthOfZeros <= k) {
        count++;
      }
      
    }
  }

  return count;
};
