/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const arr = s.split(" ");
  const output = [];

  arr.forEach(el => {
    if (el) {
      output.push(el);
    }
  });
  
  output.reverse();
  
  return output.join(" ");
};