/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
  const obj = {};
  
  for (let i = 0; i < paths.length; i++) {
    const from = paths[i][0];
    const to = paths[i][1];
    
    obj[from] = to;
  }
  
  for (const [key, value] of Object.entries(obj)) {
    if (!obj[value]) {
      return value;
    }
  }
};