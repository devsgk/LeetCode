/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
  const obj1 = {};
  const obj2 = {};
  
  for (const num of nums1) {
    obj1[num] = obj1[num] ? obj1[num] + 1 : 1;
  }
  
  for (const num of nums2) {
    obj2[num] = obj2[num] ? obj2[num] + 1 : 1;
  }
  
  const unique1 = [];
  const unique2 = [];
  
  for (const num of nums1) {
    if (!obj2[num]) {
      unique1.push(num);
    }
  }
  
  for (const num of nums2) {
    if (!obj1[num]) {
      unique2.push(num);
    }
  }
  
  return [[...new Set(unique1)], [...new Set(unique2)]]
};
