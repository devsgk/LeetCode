/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
  let value1 = "";
  let value2 = "";
  let value3 = "";

  for (const letter of firstWord) {
    const value = String(letter.charCodeAt(0) - 97);

    value1 += value;
  }

  for (const letter of secondWord) {
    const value = String(letter.charCodeAt(0) - 97);

    value2 += value;
  }

  for (const letter of targetWord) {
    const value = String(letter.charCodeAt(0) - 97);

    value3 += value;
  }

  const sum = Number(value1) + Number(value2);

  return sum === Number(value3);
};
