/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
  const stack = [];
  let index = 0;
  let count = 1;
  let result = [];
  
  while (count <= target.at(-1)) {
    if (target[index] === count) {
      stack.push(count);
      result.push("Push");
      index++;
    } else {
      stack.push(count);
      stack.pop(count);
      result.push("Push");
      result.push("Pop");
    }
    
    count++;
  }
  
  return result;
};