/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
  const [start, end] = s.split(":");
  const startChar = start[0].charCodeAt();
  const endChar = end[0].charCodeAt();
  const startRowNum = start.at(-1);
  const endRowNum = end.at(-1);
  
  const result = [];

  for (let i = startChar; i <= endChar; i++) {
    for (let j = startRowNum; j <= endRowNum; j++) {
      const newStr = String.fromCharCode(i) + j.toString();
      
      result.push(newStr);
    }
  }
  
  return result;
};
