/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
  let totalApples = apple.reduce((acc, cur) => acc + cur, 0);
  const sortedBoxes = capacity.sort((a, b) => b - a);
  let count = 0;
  
  for (let i = 0; i < sortedBoxes.length; i++) {
    totalApples -= sortedBoxes[i];
    count++;
    
    if (totalApples <= 0) break;
  }
  
  return count;
};
