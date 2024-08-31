/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
  const rank = {};
  const sorted = [...score].sort((a, b) => b - a);
  
  for (let i = 0; i < sorted.length; i++) {
    if (i === 0) {
      rank[sorted[i]] = "Gold Medal";
    } else if (i === 1) {
      rank[sorted[i]] = "Silver Medal";
    } else if (i === 2) {
      rank[sorted[i]] = "Bronze Medal";
    } else {
      rank[sorted[i]] = String(i + 1);
    }
  }
  
  const output = [];

  for (const num of score) {
    output.push(rank[num]);
  }
  
  return output;
};
