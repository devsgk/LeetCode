/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
  const obj = {};
  let max = 0;
  
  for (const digit of num) {
    obj[digit] = obj[digit] ? obj[digit] + 1 : 1;
    max = Math.max(max, digit);
  }
  console.log(obj)
  for (let i = 0; i <= max; i++) {

    if (obj[i] && obj[i] !== +num[i]) {
      return false;
    }
  }
  
  return true;
};

