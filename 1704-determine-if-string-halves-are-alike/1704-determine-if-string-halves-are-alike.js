/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
  const vowels = ["a", "e", "i", "o", "u"];
  const first = s.slice(0, s.length / 2);
  const second = s.slice(s.length / 2);
  let count1 = 0;
  let count2 = 0;
  
  for (let i = 0; i < first.length; i++) {
    const candidate1 = first[i];
    const candidate2 = second[i];
    
    if (vowels.includes(candidate1.toLowerCase())) count1++;
    if (vowels.includes(candidate2.toLowerCase())) count2++;
  }
  
  return count1 === count2;
};
