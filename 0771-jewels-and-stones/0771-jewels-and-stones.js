/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  const array = jewels.split("");
  let count = 0;
  
  stones.split("").forEach(el => {
    if(array.includes(el)) {
      count++;
    }
  })
  
  return count;
};