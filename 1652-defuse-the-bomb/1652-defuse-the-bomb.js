/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
  const result = [];
  
  if (k === 0) {
    return new Array(code.length).fill(0);
  }
  
  if (k > 0) {
    for (let i = 0; i < code.length; i++) {
      let count = 1;
      let newValue = 0;
      
      while (count <= k) {
        const index = (i + count) % (code.length);
        newValue += code[index];
        
        count++;
      }
      
      result.push(newValue);
    }
  }
  
  if (k < 0) {
    for (let i = 0; i < code.length; i++) {
      let count = 1;
      let newValue = 0;
      
      while (count <= Math.abs(k)) {
        const index = (i - count) % (code.length);
        newValue += code.at(index);

        count++;
      }

      result.push(newValue);
    }
  }
  
  return result;
};