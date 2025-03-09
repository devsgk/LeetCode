/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  const allCapital = word.toUpperCase();
  const allSmall = word.toLowerCase();
  const validAnswer = word[0].toUpperCase() + word.slice(1).toLowerCase();

  if (word === allCapital || word === allSmall || word === validAnswer) return true;
  
  return false;
};
