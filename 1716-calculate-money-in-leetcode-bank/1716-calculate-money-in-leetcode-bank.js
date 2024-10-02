/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
  let base = 1;
  let sum = 0;
  
  for (let i = 1; i <= n; i++) {
    sum += base;
    base++;
    
    if (i % 7 === 0) {
      base = (i / 7) + 1;
    }
  }
  
  return sum;
};
