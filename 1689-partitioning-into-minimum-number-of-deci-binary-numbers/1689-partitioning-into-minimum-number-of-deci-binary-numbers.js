/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
  let max = 1;
  const array = n.split("");
  
  array.forEach(el => {
    max = Math.max(el, max);
  })
  
  return Number(max);
};