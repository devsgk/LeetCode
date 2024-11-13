/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
  for (const word of words) {
    const reversed = word.split("").reverse().join("");
    
    if (word === reversed) return word;
  }
  
  return "";
};
