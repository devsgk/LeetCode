/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function(nums) {
  const MOD = 1e9 + 7;
  const arr = nums.map(num => num - Number(String(num).split("").reverse().join("")));
  const map = new Map();
  let count = 0;
  
  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];

    if (map.has(cur)) {
      count = (count + map.get(cur)) % MOD;
    }
    
    map.set(cur, (map.get(cur) || 0) + 1);
  }
  
  return count;
};
