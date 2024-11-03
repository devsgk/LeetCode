/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
  const arr1 = s1.split(" ");
  const arr2 = s2.split(" ");
  const freq = {};
  
  for (const word of arr1) {
    freq[word] = freq[word] ? freq[word] + 1 : 1;
  }
  
  for (const word of arr2) {
    freq[word] = freq[word] ? freq[word] + 1 : 1;
  }
  
  const result = [];
  
  for (const [key, value] of Object.entries(freq)) {
    if (value === 1) {
      result.push(key);
    }
  }
  
  return result;
};
