/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closestTarget = function(words, target, startIndex) {
  let index1 = startIndex;
  let index2 = startIndex;
  let found = false;
  let count = 0;

  while (count < words.length) {
    if (index1 > words.length - 1) index1 = 0;
    if (index2 < 0) index2 = words.length - 1;

    if (words[index1] === target || words[index2] === target) {
      found = true;

      break;
    }

    index1++;
    index2--;
    count++;
  }

  if (found) return count;
  
  return -1;
};
