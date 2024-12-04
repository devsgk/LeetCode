/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
  let a = n - 1;
  let b = n - a;
  
  while (a > 0) {
    if (a.toString().includes("0") || b.toString().includes("0")) {
      a--;
      b++;
    } else {
      return [a, b];
    }
  }
};
