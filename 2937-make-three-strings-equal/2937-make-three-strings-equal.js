/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {number}
 */
var findMinimumOperations = function(s1, s2, s3) {
  if (s1 === s2 && s2 === s3) return 0;

  const maxLength = Math.max(s1.length, s2.length, s3.length);
  let commonLength = 0;

  for (let i = 0; i < maxLength; i++) {
    const set = new Set();
    
    set.add(s1[i]);
    set.add(s2[i]);
    set.add(s3[i]);

    if (set.size !== 1) {
      if (i === 0) return -1;
      
      commonLength = i;

      break;
    }
  }
  
  const totalLength = s1.length + s2.length + s3.length;
  
  return totalLength - 3 * commonLength
};
