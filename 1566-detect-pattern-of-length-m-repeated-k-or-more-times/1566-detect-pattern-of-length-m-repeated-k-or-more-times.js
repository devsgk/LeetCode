/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function(arr, m, k) {
  for (let i = 0; i < arr.length; i++) {
    const pattern = arr.slice(i, i + m);
    let index = i + m;
    let repetition = 1;

    while (index <= arr.length - m) {
      const nextPattern = arr.slice(index, index + m);
      const isRepeting = nextPattern.every((el, i) => pattern[i] === el);

      if (isRepeting) {
        repetition++;
      } else {
        break;
      }

      index += m;
    }

    if (repetition >= k) return true;
  }

  return false;
};
