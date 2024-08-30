/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
  let result = [];
  
  for (const word of words) {
    const subArr = word.split(separator);
    
    result = result.concat(subArr);
  }
  
  return result.filter(el => el !== "");
};
