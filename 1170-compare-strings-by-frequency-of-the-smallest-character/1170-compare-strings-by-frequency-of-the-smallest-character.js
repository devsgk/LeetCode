/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
  function findMinCharFreq (string) {
    const arr = string.split("").map(el => el.charCodeAt(0));
    const min = Math.min(...arr);
    const minFreq = arr.filter(el => el === min).length;
    
    return minFreq;
  }
  
  const result = [];
  let count = 0;
  
  for (const query of queries) {
    const minQueryFreq = findMinCharFreq(query);

    for (const word of words) {
      const minWordFreq = findMinCharFreq(word);
      
      if (minQueryFreq < minWordFreq) count++;
    }
    
    result.push(count);
    count = 0;
  }
  
  return result;
}
