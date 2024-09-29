/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, k) {
  const m = mat.length;
  const n = mat[0].length;
  const result = [];
  
  for (let i = 0; i < m; i++) {
    const sub = [];
    
    for (let j = 0; j < n; j++) {
      const rStart = Math.max(0, i - k);
      const rEnd = Math.min(m - 1, i + k);
      
      const cStart = Math.max(0, j - k);
      const cEnd = Math.min(n - 1, j + k);
      
      let sum = 0;
      
      for (let r = rStart; r <= rEnd; r++) {
        for (let c = cStart; c <= cEnd; c++) {
          sum += mat[r][c];
        }
      }
      
      sub.push(sum);
    }
    
    result.push(sub);
  }
  
  return result;
};
