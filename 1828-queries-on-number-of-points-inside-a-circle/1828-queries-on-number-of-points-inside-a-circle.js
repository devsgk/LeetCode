/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
  const result = [];
  
  for (const query of queries) {
    const x = query[0];
    const y = query[1];
    const r = query[2];
    
    const filtered = points.filter(point => {
      const distance = Math.sqrt((point[0] - x) ** 2 + (point[1] - y) ** 2)
      
      
      return distance <= r;
    });
    
    result.push(filtered.length);
  }
  
  return result;
};
