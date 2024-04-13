/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {
  const array = [];
  
  for (let i = 0; i < logs.length; i++) {
    let count = 0;  
    
    for (let j = 0; j < logs.length; j++) {
      if (i === j) {
        count++;
      } else if (logs[i][0] >= logs[j][0] && logs[i][0] < logs[j][1]) {
        count++;
      }
    }
    array.push([logs[i][0], count]);
  }

  let max = 1;
  let index = 0;
  
  array.sort((a, b) => a[0] - b[0]);
  array.forEach((el, i) => {
    if (el[1] > max) {
      max = el[1];
      index = i;
    }
  })
  
  return array[index][0];
};