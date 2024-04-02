/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function(n) {
  const center = n;
  let count = 1;
  let ans = 0;
  
  while (count <= center) {
    ans += center - count;
    count += 2; 
  }
  
  return ans;
};