/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  let substring = "";
  
  for (let i = 0; i < s.length; i++) {
    substring += s[i];

    const newString = s.replaceAll(substring, "");

    if (s === substring) {
      break;
    }
    
    if (newString === "") {
      return true;
    }
  }
  
  return false;
};