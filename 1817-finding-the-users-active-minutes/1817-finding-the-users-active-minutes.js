/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function(logs, k) {
  const obj = {};
  
  logs.forEach(log => {
    obj[log[0]] = [];
  });
  
  logs.forEach(log => {
    obj[log[0]].push(log[1]);
  })
  
  const array = [];
  
  for (const [key, value] of Object.entries(obj)) {
    const unique = [... new Set(value)];
    array.push(unique.length);
  }
  
  const resultArr = Array(k).fill(0);
  
  array.forEach(el => {
    resultArr[el - 1]++;
  })
  
  return resultArr
};