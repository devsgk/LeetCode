/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
  const return1 = Math.abs(x - z);
  const return2 = Math.abs(y - z);

  if (return1 < return2) return 1;
  else if (return1 > return2) return 2;
  return 0;
};
