/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  const stack = [];
  
  for (let i = 0; i < asteroids.length; i++) {
    const cur = asteroids[i];
    let isDestroyed = false;
    
    while (stack.length && cur < 0 && stack[stack.length - 1] > 0) {
      const top = stack[stack.length - 1];
      
      if (top < Math.abs(cur)) {
        stack.pop();
        continue;
      } else if (top === Math.abs(cur)) {
        isDestroyed = true;
        stack.pop();
      }
      
      break;
    }

    if (stack.length === 0 || cur > 0 || stack[stack.length - 1] < 0) {
      if (!isDestroyed) {
        stack.push(cur);  
      }
    }  
  }
  
  return stack;
};