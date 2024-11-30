/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
  const sortedPairs = pairs.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
  let chainLength = 1;
  let curEnd = sortedPairs[0][1];

  
  for (let i = 1; i < sortedPairs.length; i++) {
    const nextPair = sortedPairs[i];
    
    if (curEnd < nextPair[0]) {
      chainLength++;
      curEnd = nextPair[1];
    } else {
      continue;
    }
  }

  return chainLength;
};
