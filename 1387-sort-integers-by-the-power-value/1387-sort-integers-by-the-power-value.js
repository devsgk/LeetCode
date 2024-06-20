/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function(lo, hi, k) {
  let start = lo;
  const arr = [];
  const stepsArr = [];
  const finalArr = [];
  
  while (start <= hi) {
    arr.push(start);
    start++;
  }
  
  for (let i = 0; i < arr.length; i++) {
    let cur = arr[i];
    let step = 0;
    
    while (cur !== 1) {
      if (cur % 2 === 0) {
        cur /= 2;
      } else {
        cur = cur * 3 + 1;
      }
      step++;
    }

    stepsArr.push(step);
  }
  
  for (let i = 0; i < stepsArr.length; i++) {
    finalArr.push([arr[i], stepsArr[i]]);
  }
  
  finalArr.sort((a, b) => a[1] - b[1]);
  
  return finalArr[k - 1][0];
};