/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) return s;
  
  const arr = [];
  let isForward = true;
  let index = 0;
  let result = "";
  
  for (let i = 0; i < numRows; i++) {
    arr.push([]);
  }

  for (let i = 0; i < s.length; i++) {
    arr[index].push(s[i]);
    isForward ? index++ : index--;
    
    if (index === 0 || index === numRows - 1) {
      isForward = !isForward;
    }
  }
  
  return arr.flat().join("");
}