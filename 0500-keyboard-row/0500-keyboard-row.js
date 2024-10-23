/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  const rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  const result = [];
  
  for (const word of words) {
    for (const row of rows) {
      const arr = row.split("");
      const wordArr = word.toLowerCase().split("");      
      const canType = wordArr.every(char => arr.includes(char));

      if (canType) {
        result.push(word);
      }
    }
  }
  
  return result;
};
