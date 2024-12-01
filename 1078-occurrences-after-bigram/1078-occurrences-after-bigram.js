/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
  const result  = [];
  const arr = text.split(" ");
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === first && arr[i + 1] === second) {
      if (arr[i + 2]) result.push(arr[i + 2]);
    }
  }
  
  return result;
};
