/**
 * @param {number} columnNumber
 * @return {string}
 */
function convertToTitle(columnNumber) {
  let result = '';
  
  while (columnNumber > 0) {
    columnNumber--;
    
    const char = String.fromCharCode((columnNumber % 26) + 'A'.charCodeAt(0));
    
    result = char + result;
    columnNumber = Math.floor(columnNumber / 26);
  }
  
  return result;
}
