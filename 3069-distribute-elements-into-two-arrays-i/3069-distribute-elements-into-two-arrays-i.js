/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function(nums) {
  const arr1 = [nums[0]];
  const arr2 = [nums[1]];;

  for (let i = 2; i < nums.length; i++) {
    const cur = nums[i];

    if (arr1.at(-1) > arr2.at(-1)) arr1.push(cur);
    else arr2.push(cur);
  }

  return arr1.concat(arr2);
};
