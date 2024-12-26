/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let str = "";
  let count = 1;

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === chars[i + 1]) {
      count++;
    } else {
      if (count === 1) {
        str += chars[i];
      } else {
        str += (chars[i] + count);
      }

      count = 1;
    }
  }
  
  const result = str.split("");
  
  chars.splice(0, chars.length, ...result);

  return result.length;
};
