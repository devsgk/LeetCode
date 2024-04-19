/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
  const str = String(num);
  const arr = [];
  let newStr = "";
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "6") {
      newStr = str.slice(0, i) + "9" + str.slice(i + 1);
    } else if (str[i] === "9") {
      newStr = str.slice(0, i) + "6" + str.slice(i + 1);  
    }
    arr.push(Number(newStr));
  }

  return Math.max(...arr, num);
};