/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
  const obj = {};
  
  groupSizes.forEach((num, i) => {
    if (Array.isArray(obj[num])) {
      obj[num].push(i)
    } else {
      obj[num] = [i];
    }
  });
  
  const result = [];
  
  for (const [key, value] of Object.entries(obj)) {
    while (value.length) { 
      result.push(value.splice(0, key));
    }
  }

  return result;
};