/**
 * @param {number[]} nums
 * @return {number}
 */
var countBeautifulPairs = function(nums) {
  function gcd(a, b) {
    if (!b) {
      return a;
    }

    return gcd(b, a % b);
  }
   
  function getFirstDigit(num) {
    while (num >= 10) num = Math.floor(num / 10);

    return num;
  }

  const firstDigitFreq = new Map();
  let count = 0;

  for (const num of nums) {
    const lastDigit = num % 10;

    for (const [digit, freq] of firstDigitFreq) {
      if (gcd(digit, lastDigit) === 1) count += freq;
    }

    const head = getFirstDigit(num);

    firstDigitFreq.set(head, (firstDigitFreq.get(head) || 0) + 1);
  }

  return count;
};
