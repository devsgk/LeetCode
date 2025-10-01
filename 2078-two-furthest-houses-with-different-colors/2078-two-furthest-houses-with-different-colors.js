/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
  let max = 0;

  for (let i = 0; i < colors.length; i++) {
    if (colors[i] !== colors[0]) {
      max = Math.abs(i - 0);
    }
    
    if (colors[i] !== colors[colors.length - 1]) {
      max = Math.abs(i - (colors.length - 1));
    }
  }

  return max;
};
