/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  let lateCount = 0;
  let absentCount = 0;
  
  for (const letter of s) {
    if (letter !== "L") lateCount = 0;
    if (letter === "A") absentCount++;
    if (letter === "L") lateCount++;
    if (absentCount >= 2) return false;
    if (lateCount >= 3) return false;
  }
  
  return true;
};
