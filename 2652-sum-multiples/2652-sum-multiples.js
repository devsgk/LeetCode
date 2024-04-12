/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
  const arr = [];
  let count = 1;
  
  while (count <= n) {
    arr.push(count);
    
    count++;
  }
  
  const output = [];
  
  arr.forEach(num => {
    if (num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
      output.push(num);
    }
  })
  
  return output.reduce((acc, cur) => acc + cur, 0);
};