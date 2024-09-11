/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
  let startsWithA = s[0];
  let indexOfFirstB = s.indexOf("b");
  
  if (startsWithA === false) {
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "a") {
        return false;
      }
    }
  }

  if (indexOfFirstB === -1) {
    return true;
  }
  
  for (let i = indexOfFirstB + 1; i < s.length; i++) {    
    if (s[i] === "a") {
      return false;
    }
  }
  
  return true;
};
