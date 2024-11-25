/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {
  const arr = number.split("").filter(el => {
    if (el !== "-" && el !== " ") return el;
  });
  
  let result = [];
  
  while (arr.length) {
    if (arr.length === 4) {
      result.push(arr.splice(0, 2).join(""));
      result.push(arr.splice(0, 2).join(""));
    } else if (arr.length >= 3) {
      result.push(arr.splice(0, 3).join(""));
    } else if (arr.length >= 2) {
      result.push(arr.splice(0, 2).join(""));
    }
  }
  
  return result.join("-");
};
