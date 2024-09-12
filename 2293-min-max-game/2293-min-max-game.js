/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function(nums) {
  let arr = [...nums];
  
  while (arr.length !== 1) {
    const newArr = [];
    
    for (let i = 0; i < arr.length / 2; i++) {
      if (i % 2 === 0) {
        const min = Math.min(arr[i * 2], arr[i * 2 + 1]);
        
        newArr.push(min);
      } else {
        console.log(arr[i * 2])
        const max = Math.max(arr[i * 2], arr[i * 2 + 1]);
        
        newArr.push(max);
      }
    }

    arr = newArr;
  }
  
  return arr[0];
};
