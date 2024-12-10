/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function(nums, divisors) {
  const result = [];
  
  for (const divisor of divisors) {
    let count = 0;
    
    for (const num of nums) {
      if (num % divisor === 0) count++;
    }

    const arr = [divisor, count];
    
    result.push(arr);
  }
  
  result.sort((a, b) => {
    if (b[1] !== a[1]) {
      return b[1] - a[1];
    } else {
      return a[0] - b[0];
    }
  })
              
  return result[0][0];
};
