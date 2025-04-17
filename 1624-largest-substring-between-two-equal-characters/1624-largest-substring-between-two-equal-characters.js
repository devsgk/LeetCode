/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
  let max = -1;

  for (let i = 0; i < s.length; i++) {
    const start = s[i];

    for (let j = s.length - 1; j > i; j--) {
      const next = s[j];

      if (start === next) {
        max = Math.max(max, j - i - 1);

        break;
      }
    }
  }

  return max;
};
