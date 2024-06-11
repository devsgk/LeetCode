/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
  let count = 0;

  while (count < k) {
    const max = Math.max(...gifts);
    const index = gifts.indexOf(max);
    const root = Math.floor(Math.sqrt(max));
    
    gifts[index] = root;
    count++;
  }
  
  return gifts.reduce((acc, cur) => acc + cur, 0);
};