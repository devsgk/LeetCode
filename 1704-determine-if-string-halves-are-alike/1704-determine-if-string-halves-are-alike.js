/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  const midIndex = Math.floor(s.length / 2);
  let count = 0;
  
  for (let i = 0; i < midIndex; i++) {
    const candidate1 = s[i];
    const candidate2 = s[midIndex + i];
    
    if (vowels.has(candidate1.toLowerCase())) count++;
    if (vowels.has(candidate2.toLowerCase())) count--;
  }
  
  return count === 0;
};
