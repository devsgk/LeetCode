/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
  const arr = num.split("");

  while (arr.length) {
    if (arr.at(-1) === "0") {
      arr.pop();
    } else {
      break;
    }
  }
  
  return arr.join("")
};