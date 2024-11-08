/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
  const stack = [];
  
  for (const letter of s) {
    if (letter === "B" && stack.at(-1) === "A") {
      stack.pop();
    } else if (letter === "D" && stack.at(-1) === "C") {
      stack.pop();
    } else {
      stack.push(letter);
    }
  }
  
  return stack.length;
};
