/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  const result = [];

  for (let i = 0; i <= n; i++) {
    const binary = (i >>> 0).toString(2);
    const newStr = binary.replaceAll("0", "");

    result.push(newStr.length);
  }

  return result;
};
