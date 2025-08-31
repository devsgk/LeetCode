/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
  let count = 0;
  let maxWidth = -Infinity;

  for (const arr of rectangles) {
    const min = Math.min(...arr);

    if (min > maxWidth) {
      maxWidth = min;
      count = 1;
    } else if (min === maxWidth) count++;
  }

  return count;
};
