/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  let max = 0;
  
  accounts.forEach(customer => {
    const sum = customer.reduce((acc, cur) => acc + cur, 0);
    max = Math.max(max, sum);
  })
  
  return max;
};