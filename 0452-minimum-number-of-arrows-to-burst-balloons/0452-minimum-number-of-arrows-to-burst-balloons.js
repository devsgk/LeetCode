/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  const sortedPoints = points.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
  let arrowPosition = sortedPoints[0][1];
  let count = 1;

  for (let i = 0; i < sortedPoints.length; i++) {
    const left = sortedPoints[i][0];
    const right = sortedPoints[i][1];
    
    if (arrowPosition >= left && arrowPosition <= right) {
      continue;
    } else {
      arrowPosition = right;
      count++;
    }
  }

  return count;
};
