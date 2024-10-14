/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {
  const arr = [];
  
  for (let i = 0; i < words.length; i++) {
    const set = new Set(words[i].split(""));
    const sorted = [...set].sort();
    
    arr.push(sorted.join(""));
  }
  
  let count = 0;
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const left = arr[i];
      const right = arr[j];
      
      if (left === right) count++;
    }
  }
  
  return count;
};
