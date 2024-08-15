/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length % 2 !== 0) {
    return false;
  }
  
  const stack = [];
  const obj = {
    "}": "{",
    "]": "[",
    ")": "(",
  };
  
  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    
    if (cur === "{" || cur === "[" || cur === "(") {
      stack.push(cur);
    } else {
      if (stack.length === 0 || stack.pop() !== obj[cur]) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}
