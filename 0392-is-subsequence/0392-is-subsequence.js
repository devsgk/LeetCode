/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  const sArray = s.split("");
  let tArray = t.split("");
  
  for (const letter of sArray) {
    const index = tArray.indexOf(letter);
    
    if (index !== -1) {
      tArray = tArray.slice(index + 1)
    } else {
      return false;
    }
  }
  
  return true;
};