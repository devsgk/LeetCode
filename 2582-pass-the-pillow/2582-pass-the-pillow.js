/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
  const arr = [1];
  let shouldAdd = true;
  let count = 0;

  while (count < time) {
    if (arr.length === n) {
      shouldAdd = false;
    }
    
    if (arr.length === 1) {
      shouldAdd = true;
    }
    
    if (shouldAdd) arr.push(1);
    else arr.pop();
    
    count++;
  }

  return arr.length;
};
