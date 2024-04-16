/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
  const obj1 = {};
  const obj2 = {};
  
  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = obj1[s[i]] ? obj1[s[i]] + 1 : 1;
  }
  
  for (let i = 0; i < t.length; i++) {
    obj2[t[i]] = obj2[t[i]] ? obj2[t[i]] + 1 : 1;
  }
  
  let obj1Count = 0;
  let obj2Count = 0;
  
  for (const letter of Object.keys(obj1)) {
    if (obj2[letter]) {
      const min = Math.min(obj1[letter], obj2[letter])

      obj1Count += min;
    }
  }
  
  for (const letter of Object.keys(obj2)) {
    if (obj1[letter]) {
      const min = Math.min(obj1[letter], obj2[letter])
      
      obj2Count += min;
    }
  }
  
  return s.length - Math.max(obj1Count, obj2Count);
};