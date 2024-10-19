/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
  let value1 = "";
  let value2 = "";
  let value3 = "";
  
  for (let i = 0; i < firstWord.length; i++) {
    const value = firstWord[i].charCodeAt(0) - 97;
    
    value1 += String(value);
  }
  
  for (let i = 0; i < secondWord.length; i++) {
    const value = secondWord[i].charCodeAt(0) - 97;
    
    value2 += String(value);
  }
  
  for (let i = 0; i < targetWord.length; i++) {
    const value = targetWord[i].charCodeAt(0) - 97;
    
    value3 += String(value);
  }
  
  return Number(value1) + Number(value2) === Number(value3);
};
