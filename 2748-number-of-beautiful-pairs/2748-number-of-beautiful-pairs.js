/**
 * @param {number[]} nums
 * @return {number}
 */
var countBeautifulPairs = function(nums) {
  let count = 0;

  function gcd(a, b) {
    if (!b) {
      return a;
    }

    return gcd(b, a % b);
  }
   
  for (let i = 0; i < nums.length; i++) {
    const firstDigit = Number(String(nums[i])[0]);
    console.log(firstDigit)

    for (let j = i + 1; j < nums.length; j++) {
      const lastDigit = Number(String(nums[j]).at(-1));
      const gcdInt  = gcd(firstDigit, lastDigit);

      if (gcdInt === 1) count++;
    }
  }

  return count;
};
