/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
  const pointsCopy = [...points];
  
  pointsCopy.sort((a, b) => a[0] - b[0]);
  
  const diff = [];
  
  for (let i = 0; i < pointsCopy.length - 1; i++) {
    const x1 = pointsCopy[i][0];
    const x2 = pointsCopy[i + 1][0];
    
    diff.push(Math.abs(x1 -x2));
  }
  
  return Math.max(...diff);
};