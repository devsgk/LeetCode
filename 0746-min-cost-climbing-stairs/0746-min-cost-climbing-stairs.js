/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  let first = cost[0];
  let second = cost[1];

  for (let i = 2; i < cost.length; i++) {
    const total = Math.min(first, second) + cost[i];

    first = second;
    second = total;
  }

  return Math.min(first, second);
};
