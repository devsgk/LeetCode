/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function(s) {
  const arr = s.split(" ");
  const lengths = arr.map(el => el.length);
  const maxL = Math.max(...lengths);
  
  let count = 0;
  let result = [];
  
  while (count < maxL) {
    let word = "";
    
    for (const el of arr) {
      if (el[count]) {
        word += el[count];
      } else {
        word += " ";
      }
    }
    
    result.push(word);
    count++;
  }
  
  return result.map(el => el.trimEnd());
};
