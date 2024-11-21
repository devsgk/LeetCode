/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
  let result = [];
  
  for (let i = 0; i < s.length; i++) {
    let n = result.length;
    
    if (!(s[i] === result[n - 1] && s[i] === result[n - 2])) {
      result.push(s[i]);
    }
  }

  return result.join("");
};
