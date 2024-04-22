/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
  const obj = {};
  
  for (let i = 1; i < rings.length; i = i + 2) {
    if (Array.isArray(obj[rings[i]])) {
      obj[rings[i]].push(rings[i - 1]);
    } else {
      obj[rings[i]] = [];
      obj[rings[i]].push(rings[i - 1]);
    }
  }
  
  let count = 0;
  
  for (const [key, value] of Object.entries(obj)) {
    if (new Set(value).size === 3) {
      count++;
    }
  }
  
  return count;
};