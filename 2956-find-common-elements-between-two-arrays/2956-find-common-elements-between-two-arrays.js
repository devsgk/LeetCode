/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
  let unique1 = [... new Set(nums1)];
  let unique2 = [... new Set(nums2)];
  let count1 = 0;
  let count2 = 0;
  
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < unique2.length; j++) {
      if (nums1[i] === unique2[j]) {
        count1++;
      }
    }
  }
  
  for (let i = 0; i < nums2.length; i++) {
    for (let j = 0; j < unique1.length; j++) {
      if (nums2[i] === unique1[j]) {
        count2++;
      }
    }
  }
  
  return [count1, count2]
};