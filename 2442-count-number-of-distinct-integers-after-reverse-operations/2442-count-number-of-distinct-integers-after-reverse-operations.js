/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
  const arr = [...nums];
  
  nums.forEach(num => {
    const reversed = Number(String(num).split("").reverse().join(""));

    arr.push(reversed);
  });
  
  return new Set(arr).size;
};