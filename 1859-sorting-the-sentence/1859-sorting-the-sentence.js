/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
  const array = s.split(" ");
  
  array.sort((a, b) => a.at(-1) - b.at(-1));
  
  const resultArray = array.map(word => {
    return word.slice(0, -1);
  })
  
  let str = "";
  
  resultArray.forEach(word => str += " " + word);
  
  return str.trim();
};