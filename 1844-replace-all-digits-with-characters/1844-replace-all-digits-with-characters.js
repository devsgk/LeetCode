/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
  let newStr = "";
  
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 1) {
      const code = s[i - 1].charCodeAt() + Number(s[i]);
      const letter = String.fromCharCode(code);

      newStr += letter;
    } else {
      newStr += s[i];
    }
  }
  
  return newStr;
};