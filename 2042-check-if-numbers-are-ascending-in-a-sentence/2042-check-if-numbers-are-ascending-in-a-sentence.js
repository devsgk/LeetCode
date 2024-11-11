/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
  const arr = s.split(" ").filter(el => !isNaN(el)).map(el => Number(el));
  
  for (let i = 1; i < arr.length; i++) {
    if (!(arr[i -1] < arr[i])) return false;
  }
  
  return true;
};
