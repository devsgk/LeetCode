/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
  let copy = num;
  let steps = 0;
  
  while (copy !== 0) {
    if (copy % 2 === 0) {
      copy /= 2;
    } else {
      copy--;
    }
    
    steps++;
  }
  
  return steps;
};