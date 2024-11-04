/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const arr = s.split(" ");
  const output = [];
  
  for (const word of arr) {
    output.push(word.split("").reverse().join(""));
  }
  
  return output.join(" ");
};
