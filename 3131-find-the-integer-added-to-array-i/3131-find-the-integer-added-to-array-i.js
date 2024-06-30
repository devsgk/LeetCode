/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function(nums1, nums2) {
  const obj1 = {};
  const obj2 = {};
  let x = 0;
  
  for (let i = 0; i < nums1.length; i++) {
    obj1[nums1[i]] = obj1[nums1[i]] ? obj1[nums1[i]] + 1 : 1
    obj2[nums2[i]] = obj2[nums2[i]] ? obj2[nums2[i]] + 1 : 1
  }
  
  console.log(obj1);
  console.log(obj2);
  
  for (const [key1, value1] of Object.entries(obj1)) {
    for (const [key2, value2] of Object.entries(obj2)) {
      if (value1 === value2) {
        x = Number(key2) - Number(key1);
        
        return x;
      }
    }
  }
};