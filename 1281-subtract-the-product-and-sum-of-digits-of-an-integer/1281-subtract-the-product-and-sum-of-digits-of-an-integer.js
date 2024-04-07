/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  const str = String(n);
  let product = 1;
  let sum = 0;
  
  for (const num of str) {
    product *= num;
    sum += Number(num);
  }
  
  return product - sum;
};