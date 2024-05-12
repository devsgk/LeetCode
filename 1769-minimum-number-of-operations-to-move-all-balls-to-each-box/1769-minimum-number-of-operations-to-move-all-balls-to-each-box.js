/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
  const original = [...boxes];
  const result = [];
  
  for (let i = 0; i < boxes.length; i++) {
    let count = 0;
  
    for (let j = 0; j < original.length; j++) {
      if (i !== j && original[j] === "1") {
        count += Math.abs(j - i);
      }
    }
    
    result.push(count);
  }
  
  return result;
};