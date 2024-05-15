/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if (nums.length === 1) return [nums];
  
  const results = [];
  
  for (let i = 0; i < nums.length; i++) {
    const cur = [nums[i]];
    const rest = nums.slice(0, i).concat(nums.slice(i + 1));
    const restPermuted = permute(rest);
    
    for (const perm of restPermuted) {
      results.push(cur.concat(perm));
    }
  }
  
  return results;
};