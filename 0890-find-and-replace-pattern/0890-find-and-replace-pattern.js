/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
  function verify(word, pattern) {
    const wordToPattern = new Map();
    const patternToWord = new Map();
    
    if (word.length !== pattern.length) return false;
    
    for (let i = 0; i < word.length; i++) {
      const w = word[i];
      const p = pattern[i];
      
      if (!wordToPattern.has(w)) {
        wordToPattern.set(w, p);
      }
      
      if (!patternToWord.has(p)) {
        patternToWord.set(p, w);
      }
      
      if (wordToPattern.get(w) !== p || patternToWord.get(p) !== w) return false;
    }
    
    return true;
  }
  
  return words.filter(el => verify(el, pattern));
};