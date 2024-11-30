/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  const sortedG = g.sort((a, b) => a - b);
  const sortedS = s.sort((a, b) => a - b);
  let count = 0;
  let nextGreed = 0;
  
  for (let i = 0; i < sortedS.length; i++) {
    const curSize = sortedS[i];
    
    for (let j = nextGreed; j < sortedG.length; j++) {
      const curGreed = sortedG[j];
      
      if (curSize >= curGreed) {
        count++;
        nextGreed = j + 1;
        
        break;
      }
    }
  }
  
  return count;
};
