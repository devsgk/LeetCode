/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
  const arr = sentence.split(" ");
  const first = arr[0];
  const last = arr[arr.length - 1]
  const middle = arr.slice(1, arr.length);
  
  if (first[0] !== last.at(-1)) return false;
  
  let start = first.at(-1);

  for (let i = 0; i < middle.length; i++) {
    const word = middle[i];
    const first = word[0];
    const last = word.at(-1);
    
    if (start !== first) return false;
    
    start = last;
  }
  
  return true;
};
