/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
  const arr = [];
  let count = 1;
  let result = "";
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[i + 1]) {
      
      arr.push([s[i], count]);
      count = 1;
    } else {
      count++;
    }
  }
  
  for (const subArr of arr) {
    const min = Math.min(subArr[1], 2);
    
    result += subArr[0].repeat(min);
  }
  
  return result;
};
