/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  const result = [];
  const output = [];
  let index = 0;
  
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    const next = nums[i + 1];
    
    if (cur + 1 === next) {
      continue;
    } else {
      result.push(nums.slice(index, i + 1));
      index = i + 1;

    }
  }
  
  for (const el of result) {
    if (el.length === 1) {
      output.push(el.pop().toString());
    } else {
      const range = `${el[0]}->${el.at(-1)}`;
      
      output.push(range);
    }
  }
  
  return output;
};