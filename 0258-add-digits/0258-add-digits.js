/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  let sum = num;
  let count = 0;
  
  while (true) {
    sum = sum.toString().split("").reduce((acc, cur) => Number(acc) + Number(cur), 0);

    if (sum.toString().length === 1) break;
  }

  return sum;
};
