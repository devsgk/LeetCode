/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
  const arr = s.split("");
  
  if (arr.every(el => isNaN(el))) {
    return arr.join("");
  }
  
  let i = 0;
  
  while (i < arr.length) {
    if (!isNaN(arr[i])) {
      if (i - 1 >= 0) {
        arr.splice(i - 1, 2);
        i -= 1;
      } else {
        arr.splice(i, 1);
      }
    } else {
      i++;
    }
  }
  
  return arr.join("")
};