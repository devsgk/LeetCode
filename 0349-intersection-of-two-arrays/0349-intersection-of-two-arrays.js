/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const obj = {};
  const intersection = [];
  const nums2Copy = [...new Set(nums2)];
  
  for (let i = 0; i < nums1.length; i++) {
    obj[nums1[i]] = obj[nums1[i]] ? obj[nums1[i]] + 1 : 1;
  }
  
  for (let i = 0; i < nums2Copy.length; i++) {
    if (obj[nums2Copy[i]]) {
      intersection.push(nums2Copy[i]);
    }
  }
  
  return intersection;
};