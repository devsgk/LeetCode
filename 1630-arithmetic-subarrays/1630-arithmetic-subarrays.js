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
    const diff = sorted[0] - sorted[1];
    let isTrue = true;
    
    for (let j = 0; j < sorted.length - 1; j++) {
      if (diff !== (sorted[j] - sorted[j + 1])) {
        isTrue = false;
      }
    }
    
    output.push(isTrue);
  }
  
  return output;
};
