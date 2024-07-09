/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
  const vowels = ["a", "e", "i", "o", "u"];
  const result = new Array(s.length).fill(null);
  const vowelsArr = [];
  
  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    
    if (vowels.includes(cur.toLowerCase())) {
      vowelsArr.push(cur);
    } else {
      result[i] = cur;
    }
  }
  
  const sorted = vowelsArr.sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0));
  
  for (let i = 0; i < result.length; i++) {
    if (result[i] === null) {
      result[i] = sorted.pop();
    }
  }
  
  return result.join("");
};