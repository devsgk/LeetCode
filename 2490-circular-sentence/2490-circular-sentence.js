/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
  const arr = sentence.split(" ");
  const result = [];
  
  for (const word of arr) {
    const start = word[0];
    const last = word.at(-1);
    
    result.push(start);
    result.push(last);
  }
  
  for (let i = 0; i < result.length; i++) {
    if (i === 0) {
      if (result[i] !== result.at(-1)) {
        return false;
      }
    } else if (i !== result.length - 1) {
      if (result[i] !== result[i + 1]) {
        return false;
      }

      i ++;
    }
  }
  
  return true;
};
