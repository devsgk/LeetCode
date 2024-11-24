/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  const freq = {};
  const arr = [];
  
  for (const char of chars) {
    freq[char] = freq[char] ? freq[char] + 1 : 1;
  }

  for (const word of words) {
    const obj = {};
    const array = word.split("");
    
    for (const item of array) {
      obj[item] = obj[item] ? obj[item] + 1 : 1;
    }
    
    arr.push(obj);
  }
  
  let count = 0;

  for (const obj of arr) {

    let canBeFormed = true;
    
    for (const [key, value] of Object.entries(obj)) {
      if (!freq[key] || (obj[key] > freq[key])) {
        canBeFormed = false;
        continue;
      }
    }
    
    if (canBeFormed) {
      count += Object.values(obj).reduce((acc, cur) => acc + cur, 0);
    }
  }
  
  return count;
};
