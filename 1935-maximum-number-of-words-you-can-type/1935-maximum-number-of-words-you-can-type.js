/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
  const arr = text.split(" ");
  const broken = brokenLetters.split("");
  let count = 0;

  for (const word of arr) {
    let canType = true;
    for (const letter of broken) {
      if (word.includes(letter)) {
        canType = false;
        continue;
      }
    }
    
    if (canType) {
      count++;
    }
  }
  
  return count;
};
