/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  let first = cost[0];
  let second = cost[1];
  
  for (let i = 2; i < cost.length; i++) {
    const cur = cost[i] + Math.min(first, second);
    first = second;
    second = cur;
  }
  
  return Math.min(first, second);
};
