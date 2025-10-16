/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
  const arr = [];

  for (let i = 0; i < nums.length - 1; i++) {
    const cur = nums[i];
    const next = nums[i + 1];

    if (cur < next) arr.push("inc");
    else if (cur > next) arr.push("dec");
    else arr.push("none");
  }

  let count = 1;
  let max = 1;

  const allSame = arr.every(el => el === "none");

  if (allSame) return 1;

  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];
    const next = arr[i + 1];

    if (cur !== "none" && cur === next) {
      count++;
    } else {
      max = Math.max(max, count);
      count = 1;
    }
  }

  return max + 1;
};
