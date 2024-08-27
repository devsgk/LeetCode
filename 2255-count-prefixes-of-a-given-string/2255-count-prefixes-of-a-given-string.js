/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
  const prefixes = [];
  let prefix = "";
  let count = 0;
  
  for (const letter of s) {
    prefix += letter;
    prefixes.push(prefix);
  }
  
  for (word of words) {
    if (prefixes.includes(word)) {
      count++;
    };
  }

  return count;
};