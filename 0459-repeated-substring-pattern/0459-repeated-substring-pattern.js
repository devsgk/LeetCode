/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  let subString = "";

  for (let i = 0; i < s.length; i++) {
    subString += s[i];

    let count = 2;
    let newSubstring = subString;


    while (newSubstring.length <= s.length) {
      newSubstring = subString.repeat(count);

      if (newSubstring === s) return true;

      count++;
    }
  }

  return false;
};
