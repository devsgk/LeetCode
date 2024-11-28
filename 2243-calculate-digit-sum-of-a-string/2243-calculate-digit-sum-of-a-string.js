/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function(s, k) {
  let str = s;
  
  while (str.length > k) {
    const arr = [];
    
    for (let i = 0; i < str.length; i++) {
      const sub = str.slice(i, Math.min(str.length + 1, i + k));

      arr.push(sub);
      i += k - 1;
    }
    
    let newStr = "";
    
    for (const el of arr) {
      const sum = el.split("").reduce((acc, cur) => Number(acc) + Number(cur) , 0);
      
      newStr += String(sum);
    }
    
    str = newStr;
  }
  
  return str;
};
