/**
 * @param {string} target
 * @return {string[]}
 */
var stringSequence = function(target) {
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const arr = [];
  
  for (const letter of target) {
    const index = letters.indexOf(letter);
    
    arr.push(letters.slice(0, index + 1));
  }
  
  if (arr.length === 1) return arr[0];
  
  const result = [];
  
  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];

    if (i === 0) {
      result.push(...cur);
    } else {
      const prev = target.slice(0, i);
      
      for (const char of cur) {
        result.push(prev + char);
      }
    }
  }
  
  return result;
};
