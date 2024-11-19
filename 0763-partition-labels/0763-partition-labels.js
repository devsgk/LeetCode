/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
  const obj = {};
  
  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = i;
  }
  
  
  const result = [];
  let start = 0;
  let end = 0;
  
  for (let i = 0; i < s.length; i++) {
    const cur = s[i];

    end = Math.max(end, obj[cur]);
    
    if (i === end) {
      result.push(end - start + 1);
      start = i + 1;
    }
  }
  
  return result;
};
