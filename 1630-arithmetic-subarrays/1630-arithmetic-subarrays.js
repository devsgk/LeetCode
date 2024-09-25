/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
  const output = [];
  
  for (let i = 0; i < l.length; i++) {
    const start = l[i];
    const end = r[i];
    
    const sorted = nums.slice(start, end + 1).sort((a, b) => a - b);
    const diff = sorted[1] - sorted[0];
    
    const isTrue = sorted.every((val, index) => {
      if (index === 0) return true;
      return sorted[index] - sorted[index - 1] === diff;
    });
    
    output.push(isTrue);
  }
  
  return output;
};
