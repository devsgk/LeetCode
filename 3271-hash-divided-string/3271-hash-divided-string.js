/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var stringHash = function(s, k) {
  const arr = [];
  const length = s.length / k;
  
  for (let i = 0; i < s.length; i++) {
    const hash = s[i].charCodeAt(0) - 97;
    
    arr.push(hash);
  }

  const result = [];
  
  for (let i = 0; i < arr.length; i = i + k) {
    result.push(arr.slice(i, i + k));
  }
  
  const sumArr = [];
  
  for (const arr of result) {
    const sum = arr.reduce((acc, cur) => acc + cur, 0);
    
    sumArr.push(sum % 26);
  }

  let output = "";
  
  for (const hash of sumArr) {
    const char = String.fromCharCode(hash + 97);
    
    output += char;
  }
  
  return output;
};
