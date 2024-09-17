/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
  const arr = title.split(" ");
  const output = [];
  
  for (const word of arr) {
    if (word.length <= 2) {
      output.push(word.toLowerCase());
    } else {
      const newWord = `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`;
      
      output.push(newWord);
    }
  }
  
  return output.join(" ");
};
