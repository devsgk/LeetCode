/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
  const sorted = arr.sort((a, b) => a - b);
  let obj = {};
  
  for (let i = 0; i < sorted.length - 1; i ++) {
    const diff = Math.abs(sorted[i + 1] - sorted[i]);
    
    if (obj[diff]) {
      obj[diff].push([sorted[i], sorted[i + 1]])
    } else {
      obj[diff] = [];
      obj[diff].push([sorted[i], sorted[i + 1]]);
    }
  }
  
  let min = Infinity;
  
  for (const [key, value] of Object.entries(obj)) {
    min = Math.min(Number(key), min);
  }

  return obj[String(min)];
};