/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
  const arr = n.toString().split("");
  const numsArr = arr.map(el => Number(el));
  let flag = true;
  let sum = 0;
  
  for (const num of numsArr) {
    if (flag) {
      sum += num;
      flag = false;
    } else {
      sum -= num;
      flag = true;
    }
  }
  
  return sum;
};
