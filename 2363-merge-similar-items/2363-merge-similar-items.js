/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
  const obj = {};
  const arr = [];
  
  for (const el of items1) {
    const val = el[0];
    const weight = el[1];
    
    obj[val] = obj[val] ? obj[val] + weight : weight;
  }
  
  for (const el of items2) {
    const val = el[0];
    const weight = el[1];
    
    obj[val] = obj[val] ? obj[val] + weight : weight;
  }
  
  for (const [key, value] of Object.entries(obj)) {
    arr.push([Number(key), value]);
  }
  
  return arr.sort((a, b) => a[0] - b[0]);
};