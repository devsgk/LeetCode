/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function(nums1, nums2) {
  const sorted1 = nums1.sort((a, b) => a - b);
  const sorted2 = nums2.sort((a, b) => a - b);

  const x = sorted2[0] - sorted1[0];

  return x;
};
