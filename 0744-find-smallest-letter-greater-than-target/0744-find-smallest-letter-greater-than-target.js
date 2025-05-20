/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  const targetCode = target.charCodeAt();

  for (const letter of letters) {
    const code = letter.charCodeAt();

    if (code > targetCode) return letter;
  }

  return letters[0];
};
