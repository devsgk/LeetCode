/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  const array = words.slice(left, right + 1);

  for (const word of array) {
    const start = word[0];
    const last = word.at(-1);
    
    if (vowels.indexOf(start) === -1 || vowels.indexOf(last) === -1) {
      continue;
    } else {
      count++;
    }
  }
  
  return count;
};
