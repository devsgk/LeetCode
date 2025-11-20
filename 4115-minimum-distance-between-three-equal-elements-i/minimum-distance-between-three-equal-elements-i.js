/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function(nums) {
  const indexMap = {};

  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];

    if (Array.isArray(indexMap[cur])) indexMap[cur].push(i);
    else {
      indexMap[cur] = [];
      indexMap[cur].push(i);
    }
  }

  let min = Infinity;

  for (const [key, value] of Object.entries(indexMap)) {
    if (value.length < 3) continue;

    for (let j = 0; j + 2 < value.length; j++) {
      const dist = value[j + 2] - value[j];

      min = Math.min(min, dist);
    }
  }

  return min === Infinity ? -1 : min * 2;
};
