/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
  const obj = {};
  
  for (const letter of s) {
    if (obj[letter]) {
      return letter;
    } else {
      obj[letter] = 1;
    }
  }
};
