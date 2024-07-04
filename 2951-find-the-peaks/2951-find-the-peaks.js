/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function(mountain) {
  const result = [];
  
  for (let i = 1; i < mountain.length - 1; i++) {
    let candidate = mountain[i];

    if (candidate > mountain[i - 1] && candidate > mountain[i + 1]) {
      result.push(i);
    }
  }
  
  return result;
};