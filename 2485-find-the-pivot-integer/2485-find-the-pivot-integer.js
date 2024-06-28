/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
  for (let i = 0; i <= n; i++) {
    let sum1 = 0;
    let sum2 = 0;
    
    for (let j = 0; j <= i; j++) {
      sum1 += j;
    }
    
    for (let k = i; k <= n; k++) {
      sum2 += k;
    }
    
    if (sum1 === sum2) {
      return i;
    }
  }
  
  return -1;
};