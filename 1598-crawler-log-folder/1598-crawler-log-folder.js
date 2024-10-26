/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
  const arr = [];
  let count = 0;
  
  for (const log of logs) {
    const prev = arr.pop();
    
    if (log === "../") {
      if (count === 0) {
        continue;
      } else {
        count--;
      }
    } else if (log === "./") {
      continue;
    } else {
      count++;
    }
  }
  
  return count;
};
