/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(s, distance) {
  const obj = {};
  
  for (let i = 0; i < s.length; i++) {
    const charCode = s[i].charCodeAt(0) - 97;

    obj[charCode] ? obj[charCode].push(i) : obj[charCode] = [i];
  }

  for (const [key, value] of Object.entries(obj)) {
    const distanceValue = distance[key];
    const diff = Math.abs(value[0] - value[1]) - 1;
    
    if (distanceValue !== diff) return false;
  }
  
  return true;
};
