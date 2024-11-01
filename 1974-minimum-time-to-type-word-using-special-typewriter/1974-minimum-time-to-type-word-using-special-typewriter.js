/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function(word) {
  let count = 0;
  let cur = "a";
  
  for (const char of word) {
    const diff = Math.abs(cur.charCodeAt(0) - char.charCodeAt(0));
    
    if (diff > 13) {
      count += 26 - diff + 1;
    } else {
      count += diff + 1;
    }
    
    cur = char;
  }
  
  return count;
}
