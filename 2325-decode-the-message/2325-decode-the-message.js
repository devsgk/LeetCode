/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
  const obj = {};
  let arr = [];
  let result = "";
  
  for (const letter of key) {
    if (!obj[letter]) {
      obj[letter] = true;
      arr.push(letter);
    }
  }
  
  arr = arr.filter(el => el !== " ");

  for (let i = 0; i < message.length; i++) {
    const index = arr.indexOf(message[i]);

    if (message[i] === " ") {
      result += " "
    } else {
      result += String.fromCharCode(index + 97);
    }
  }

  return result;
};