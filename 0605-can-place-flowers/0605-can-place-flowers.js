/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  const length = flowerbed.length;

  for (let i = 0; i < flowerbed.length; i++) {
    const cur = flowerbed[i];
    const prev = flowerbed[i - 1];
    const next = flowerbed[i + 1];
    
    if (cur === 0) {
      if (i === 0) {
        if (next !== 1) {
          flowerbed[i] = 1;
          n--;
        }
      }
      
      if (i === length) {
        if (prev !== 1) {
          flowerbed[i] = 1;
          n--;
        }
      }

      if (i !== 0 && i < length) {
        if (prev !== 1 && next !== 1) {
          flowerbed[i] = 1;
          n--;
        }
      }
    }
  }
  
  return n <= 0;
};
