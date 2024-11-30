/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  const sortedG = g.sort((a, b) => a - b);
  const sortedS = s.sort((a, b) => a - b);
  let gIndex = 0;
  let sIndex = 0;
  let count = 0;

  while (gIndex <= sortedG.length && sIndex <= sortedS.length) {
    if (sortedS[sIndex] >= sortedG[gIndex]) {
      sIndex++;
      gIndex++;
      count++;
    } else {
      sIndex++;
    }
  }
  
  return count;
};
