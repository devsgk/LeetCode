/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    let char = "";
    
    if (s[i + 2] === "#") {
      const sliced = Number(s.slice(i, i + 2));
      char = String.fromCharCode(sliced + 96);

      i += 2;
    } else {
      const num = Number(s[i]);

      char = String.fromCharCode(num + 96);

      ;
    }
    
    result += char;
  }
  
  return result;
};
