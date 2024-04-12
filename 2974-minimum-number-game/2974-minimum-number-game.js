/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
  const numsCopy = [...nums];
  const arr = [];
  
  while (numsCopy.length) {
    const min = Math.min(...numsCopy);
    const index = numsCopy.indexOf(min);
    
    numsCopy.splice(index, 1);
    arr.push(min);
  }
  
  const output = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      output.push(arr[i + 1])
    } else {
      output.push(arr[i - 1])
    }
  }

  return output;
};