/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
  const firstWord = [...words[0].split("")];
  let obj = {};
  
  for (const char of firstWord) {
    obj[char] = obj[char] ? obj[char] + 1 : 1;
  }
  
  for (let i = 1; i < words.length; i++) {
    const arr = [...words[i].split("")];
    const newObj = {};
    
    for (const char of arr) {
      if (obj[char]) {
        newObj[char] = newObj[char] ? Math.min(newObj[char] + 1, obj[char]) : 1;
      }
    }

    obj = newObj;
  }
  
  const result = [];
  
  for (const [key, value] of Object.entries(obj)) {
    let count = value;
    
    while (count !== 0) {
      result.push(key);
      count--;
    }
  }
  
  return result;
};