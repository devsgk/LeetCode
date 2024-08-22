/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
  let count = 0;
  
  patterns.forEach(pattern => {
    const replaced = word.replace(pattern, "");
    
    if (word !== replaced) {
      count++;
    }
  });
  
  return count;
};