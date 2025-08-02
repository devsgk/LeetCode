/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
  let width = area;
  let length = 1;
  let candidates = [];

  while (width >= length) {
    if (area % width === 0) {
      length = area / width;

      if (width >= length) candidates.push([width, length]);
    }

    width--;
  }

  return candidates.pop();
};
