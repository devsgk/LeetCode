/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
  const unique1 = [...new Set(nums1)];
  const unique2 = [...new Set(nums2)];
  const unique3 = [...new Set(nums3)];
  const total = unique1.concat(unique2).concat(unique3);
  const obj = {};
  
  total.forEach(num => {
    obj[num] = obj[num] ? obj[num] + 1 : 1;
  });
  
  const result = [];
  for (const [key, value] of Object.entries(obj)) {
    if (value >= 2) {
      result.push(Number(key));
    }
  }
  
  return result;
};