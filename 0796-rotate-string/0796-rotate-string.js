/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
  if (s.length !== goal.length) return false;
  
  const sArr = s.split("");
  const goalArr = goal.split("");
  const indices = [];
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === goal[0]) {
      indices.push(i)
    }
  }
  
  for (const index of indices) {
    const sSub = sArr.slice(index);
    const goalSub = goalArr.slice(0, sSub.length);
    const sRest = sArr.slice(0, index);
    const goalRest = goalArr.slice(sSub.length);

    const condition1 = sSub.join("") === goalSub.join("");
    const condition2 = sRest.join("") === goalRest.join("");

    if (condition1 && condition2) {
      return true;
    }
  }
  
  return false;
};