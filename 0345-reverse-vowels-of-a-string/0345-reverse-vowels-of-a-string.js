/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const arr = [];
  const found = [];
  
  for (const letter of s) {
    if (vowels.includes(letter)) {
      arr.push(null);
      found.push(letter);
    } else {
      arr.push(letter);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === null) {
      arr[i] = found.pop();
    }
  }
  
  return arr.join("");
};
