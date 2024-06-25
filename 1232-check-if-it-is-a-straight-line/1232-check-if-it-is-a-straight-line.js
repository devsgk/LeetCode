/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
  if (coordinates.length === 2) {
    return true;
  }

  const arr = [];
  
  for (let i = 1; i < coordinates.length; i++) {
    const xDiff = coordinates[i][0] - coordinates[0][0];
    const yDiff = coordinates[i][1] - coordinates[0][1];
    const ratio = xDiff / yDiff;
    
    if (xDiff === 0) {
      arr.push("y");
    } else if (yDiff === 0) {
      arr.push("x");
    } else {
      arr.push(ratio);
    }
  }

  if (new Set(arr).size === 1) {
    return true;
  }
  
  return false;
};