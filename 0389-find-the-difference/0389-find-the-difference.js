/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  const sArr = s.split("");
  const tArr = t.split("");
  
  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    const index = tArr.indexOf(letter);
    
    tArr[index] = "";
  }
  
  return tArr.join("")
};