/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  const obj = {};
  
  for (const el of arr2) {
    obj[el] = 0;
  }
  
  const result = [];
  const rest = [];
  
  for (const el of arr1) {
    if (obj[el] || obj[el] === 0) {
      obj[el]++;
    } else {
      rest.push(el);
    }
  }
  
  for (const el of arr2) {
    let count = 0;
    while (count < obj[el]) {
      result.push(el);
      count++;
    }
  }

  rest.sort((a, b) => a - b);
  
  return result.concat(rest);
};