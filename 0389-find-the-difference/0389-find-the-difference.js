/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  const obj = {};
  
  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = obj[s[i]] ? obj[s[i]] + 1 : 1;
  }
  
  console.log(obj);
  
  for (let i = 0; i < t.length; i++) {
    if (!obj[t[i]]) {
      return t[i];
    } else {
      obj[t[i]]--;
    }
  }
};