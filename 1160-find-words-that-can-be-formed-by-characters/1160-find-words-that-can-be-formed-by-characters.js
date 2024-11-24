/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  function canForm(word, counts) {
    const newArr = new Array(26).fill(0);
    
    for (const letter of word) {
      const code = letter.charCodeAt(0) - "a".charCodeAt(0);
      
      newArr[code]++;
      
      if (newArr[code] > counts[code]) {
        return false;
      }
    }

    return true;
  }
  
  const counts = new Array(26).fill(0);
  let result = 0;
  
  for (const char of chars) {
    counts[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  for (const word of words) {
    if(canForm(word, counts)) {
      result += word.length;
    };
  }
  
  return result;
};
