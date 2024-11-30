/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
  const result = []
  const lastIndices = {};
  let max = 0;
  
  for (let i = 0; i < s.length; i++) {
    lastIndices[s[i]] = i;
  }
  
  for (let i = 0; i < s.length; i++) {
    const curChar = s[i];
    const curCharLastIndex = lastIndices[curChar];
    
    max = Math.max(max, curCharLastIndex);
    
    if (i === max) {
      const prevIndex = result.reduce((acc, cur) => acc + cur, 0);
      
      result.push(i + 1 - prevIndex);
    }
  }
  
  return result;
};
