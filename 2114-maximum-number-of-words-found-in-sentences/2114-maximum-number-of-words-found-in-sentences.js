/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
  const array = [];
  
  sentences.forEach(el => {
    const num = el.split(" ").length;
    
    array.push(num);
  })
  
  return Math.max(...array);
};