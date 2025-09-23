/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => b - a);

    const first = stones[0];
    const second = stones[1];

    if (first === second) {
      stones.shift();
      stones.shift();
    } else {
      stones.shift();
      stones.shift();
      diff = first - second;
      stones.unshift(diff);
    }
  }

  if (stones.length > 0) return stones[0]

  return 0;
};
