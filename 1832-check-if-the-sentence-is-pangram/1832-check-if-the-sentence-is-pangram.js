/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
  const unique = new Set();
  
  for (const char of sentence) {
    unique.add(char);
  }

  return unique.size === 26;
};
