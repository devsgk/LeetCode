/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
  let charCode = 97;
  const map = {};

  for (const char of key) {
    if (char === " ") continue;
    if (map[char]) continue;
    else map[char] = String.fromCharCode(charCode);

    charCode++;
  }

  let output = "";

  for (const char of message) {
    if (char === " ") output += " ";
    else output += map[char];
  }

  return output;
};
