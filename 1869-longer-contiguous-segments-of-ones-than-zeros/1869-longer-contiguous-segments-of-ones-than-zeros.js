/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {
  let oneCount = 0;
  let zeroCount = 0;

  let oneCountMax = 0;
  let zeroCountMax = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "0") {
      zeroCount++;
      zeroCountMax = Math.max(zeroCountMax, zeroCount);
      oneCountMax = Math.max(oneCountMax, oneCount);
      oneCount = 0;
    } else {
      oneCount++;
      zeroCountMax = Math.max(zeroCountMax, zeroCount);
      oneCountMax = Math.max(oneCountMax, oneCount);
      zeroCount = 0;
    }
  }

  return oneCountMax > zeroCountMax;
};
