/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  let size1 = set1.size;
  let size2 = set2.size;
  const unique1 = [];
  const unique2 = [];
  
  for (const num of set2) {
    set1.add(num);
    
    if (size1 !== set1.size) {
      unique2.push(num);
      size1++;
    }
  }
  
  for (const num of set1) {
    set2.add(num);
    
    if (size2 !== set2.size) {
      unique1.push(num);
      size2++;
    }
  }
  
  return [unique1, unique2]
};
