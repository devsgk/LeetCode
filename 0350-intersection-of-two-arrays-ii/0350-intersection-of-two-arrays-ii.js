/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const obj1 = {};
  const obj2 = {};
  const result = [];
  
  for (const num of nums1) {
    obj1[num] = obj1[num] ? obj1[num] + 1 : 1;
  }
  
  for (const num of nums2) {
    obj2[num] = obj2[num] ? obj2[num] + 1 : 1;
  }
  
  for (const [key, value] of Object.entries(obj1)) {
    if (obj2[key]) {
      const quantity = Math.min(obj1[key], obj2[key])
      
      for (let i = 0; i < quantity; i++) {
        result.push(+key);
      }
    }
  }
  
  return result;
};