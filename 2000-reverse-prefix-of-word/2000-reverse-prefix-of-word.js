/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
  const index = word.indexOf(ch);
  let result = word.slice(index + 1);

  if (index !== -1) {
    const prefix = word.slice(0, index + 1);
    const reversedPrefix = prefix.split("").reverse().join("");
    
    result = reversedPrefix + result;
  }
  
  return result;
};
