/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    const cur = flowerbed[i];
    const prev = flowerbed[i - 1];
    const next = flowerbed[i + 1];

    if (cur === 0) {
      if (i === 0) {
        if (next !== 1) {
          flowerbed[i] = 1;
          count++;
        }
      } else if (i === flowerbed.length - 1) {
        if (prev !== 1) {
          flowerbed[i] = 1;
          count++;
        }
      } else {
        if (prev !== 1 && next !== 1) {
          flowerbed[i] = 1;
          count++;
        }
      }
    }
  }

  return count >= n;
};
