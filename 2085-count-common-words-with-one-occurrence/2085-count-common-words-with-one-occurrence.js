/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
  const frequency1 = {};
  const frequency2 = {};
  
  for (const word of words1) {
    frequency1[word] = frequency1[word] ? frequency1[word] + 1 : 1;
  }

  for (const word of words2) {
    frequency2[word] = frequency2[word] ? frequency2[word] + 1 : 1;
  }
  
  let count = 0;
  
  for (const key of Object.keys(frequency1)) {
    if (frequency1[key] === 1 && frequency2[key] === 1) {
      count++;
    }
  }
  
  return count;
};
