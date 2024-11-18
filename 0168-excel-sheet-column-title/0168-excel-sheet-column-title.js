/**
 * @param {number} columnNumber
 * @return {string}
 */
function convertToTitle(columnNumber) {
  let colNum = columnNumber;
  let result = "";
  
  while (colNum > 0) {
    colNum--;
    
    const char = String.fromCharCode(colNum % 26+ "A".charCodeAt(0));
    
    result = char + result;
    colNum = Math.floor(colNum / 26);
  }
  
  return result;
}
