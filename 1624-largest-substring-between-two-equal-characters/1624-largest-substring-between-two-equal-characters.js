/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
  let max = -1;

  for (let i = 0; i < s.length; i++) {
    const start = s[i];
    let count = 0;

    for (let j = i + 1; j < s.length; j++) {
      const next = s[j];
      
      if (start === next) {
        max = Math.max(max, count);

        break;
      } else {
        count++;
      }
    }
  }

  return max;
};
