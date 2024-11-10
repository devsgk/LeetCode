/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    const cur = words[i];
    
    for (let j = i + 1; j < words.length; j++) {
      if (cur.split("").reverse().join("") === words[j]) count++;
    }
  }
  
  return count;
};
