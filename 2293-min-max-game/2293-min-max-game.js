/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function(nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  
  let flag = true;
  const newArr = [];
  
  for (let i = 0; i < nums.length; i = i + 2) {
    console.log(i);
    if (flag) {
      const min = Math.min(nums[i], nums[i + 1]);
      
      newArr.push(min);      
      flag = false;
    } else {
      const max = Math.max(nums[i], nums[i + 1]);

      newArr.push(max);
      flag = true;
    }
  }

  return minMaxGame(newArr);
};
