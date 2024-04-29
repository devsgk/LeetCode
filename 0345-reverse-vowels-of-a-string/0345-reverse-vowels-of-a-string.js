/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const string = s.split("");
  const arr = [];

  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      arr.push(string[i]);
      string[i] = null;
    }
  }
  
  for (let i = 0; i < string.length; i++) {
    if (string[i] === null) {
      string[i] = arr.pop();
    }
  }
  
  return string.join("");
};