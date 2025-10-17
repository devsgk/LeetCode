/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  let max = 0;

  accounts.forEach(el => {
    const sum = el.reduce((acc, cur) => acc + cur, 0);
    max = Math.max(sum, max);
  });

  return max;
};
