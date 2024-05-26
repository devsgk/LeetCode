/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const words = s.split(" ");

  if (pattern.length !== words.length) return false;
  
  const letterToWord = new Map();
  const wordToLetter = new Map();
  
  for (let i = 0; i < pattern.length; i++) {
    const letter = pattern[i];
    const word = words[i];
    
    if (letterToWord.has(letter) && letterToWord.get(letter) !== word) return false;
    if (wordToLetter.has(word) && wordToLetter.get(word) !== letter) return false;
    
    letterToWord.set(letter, word);
    wordToLetter.set(word, letter);
  }
  
  return true;
};