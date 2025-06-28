/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var hasIncreasingSubarrays = function(nums, k) {
  function check(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      const cur = arr[i];
      const next = arr[i + 1];

      if (cur >= next) return false;
    }

    return true;
  }

  for (let i = 0; i < nums.length - k; i++) {
    const arr1 = nums.slice(i, i + k);
    const arr2 = nums.slice(i + k, i + 2 * k);

    if (check(arr1) && check(arr2) && arr1.length === k && arr2.length === k) return true;
  }

  return false;
};
