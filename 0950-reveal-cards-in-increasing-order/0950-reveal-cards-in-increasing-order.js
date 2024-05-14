/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
  const sorted = [...deck].sort((a, b) => b - a);
  const ans = [];
  
  ans.push(sorted[0]);
  
  for (let i = 1; i < sorted.length; i++) {
    const popped = ans.pop();
    
    ans.unshift(popped);
    ans.unshift(sorted[i]);
  }
  
  return ans;
};