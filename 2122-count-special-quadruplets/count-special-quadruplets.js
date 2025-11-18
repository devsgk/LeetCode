/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    const first = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      const second = nums[j];

      for (let k = j + 1; k < nums.length; k++) {
        const third = nums[k];

        for (let l = k + 1; l < nums.length; l++) {
          const remainingNum = nums[l];

          if (first + second + third === remainingNum) count++;
        }
      }
    }
  }

  return count;
};
