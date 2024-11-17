/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
  function findMinCharFreq (string) {
    let freq = {};
    
    for (let char of string) {
      freq[char] ? (freq[char] += 1) : (freq[char] = 1);
    }
    
    return freq[Object.keys(freq).sort()[0]];
  }
  
  queries = queries.map(el => findMinCharFreq(el));
  words = words.map(el => findMinCharFreq(el));

  words.sort((a, b) => a - b);
  
  const result = [];
  
  for (let query of queries) {
    let start = 0;
    let end = words.length - 1;
    
    while (start <= end) {
      let mid = parseInt((start + end) / 2);
      
      if (query < words[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    
    result.push(words.length - 1 - end);
  }
  
  return result;
}
