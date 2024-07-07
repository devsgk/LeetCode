/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
  dictionary.sort((a, b) => a.length - b.length);
  
  const sentenceArr = sentence.split(" ");
  let result = [];
  
  for (let i = 0; i < sentenceArr.length; i++) {
    let str = sentenceArr[i];
    
    for (let j = 0; j < dictionary.length; j++) {
      if (sentenceArr[i].startsWith(dictionary[j])) {
        str = dictionary[j];

        break;
      }
    }
    
    result.push(str);
  }
  
  return result.join(" ");
};