/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
  const arr = [];
  
  for (let i = 0; i < heights.length; i++) {
    arr.push([heights[i], names[i]]);
  }
  
  arr.sort((a, b) => b[0] - a[0]);
  
  const result = [];
  arr.forEach(el => result.push(el[1]));
  
  return result;
};