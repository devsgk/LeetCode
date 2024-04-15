/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
  const str = String(x);
  let sum = 0;
  
  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }
  
  if (x % sum === 0) {
    return sum;
  } else {
    return -1
  }
};