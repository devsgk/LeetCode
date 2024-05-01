/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  const arr = [...flowerbed];
  let count = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i - 1] && !arr[i + 1] && arr[i] === 0) {
      count++;
      arr[i] = 1;
    }
  }
  
  return count >= n;
};