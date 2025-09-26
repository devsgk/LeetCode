/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const result = new Array(nums1.length);

  for (let i = 0; i < nums1.length; i++) {
    const num = nums1[i];
    const index = nums2.indexOf(num);
    const subArr = nums2.slice(index + 1);

    if (subArr.some(el => el> num)) {
      subArr.filter(el => el > num);
      result[i] = subArr[0];
    } else {
      result[i] = -1;
    }
  }

  return result;
};
