/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
  let str = s;
  let count = 0;
  const length = s.length;
  
  while (count < length) {
    str = str.replace("AB", "");
    str = str.replace("CD", "");
    count++;
  }
  
  return str.length;
};
