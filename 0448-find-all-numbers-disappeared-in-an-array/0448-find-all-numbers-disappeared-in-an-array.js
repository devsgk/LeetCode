/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let count = 1;
  const length = nums.length;
  const freq = {};

  for (const num of nums) {
    freq[num] = freq[num] ? freq[num] + 1 : 1;
  }

  const result = [];
  while (count <= length) {
    if (!freq[count]) result.push(count);

    count++;
  }

  return result;  
}
