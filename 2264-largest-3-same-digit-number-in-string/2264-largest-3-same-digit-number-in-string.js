/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
  const candidates = [];
  
  for (let i = 0; i < num.length; i++) {
    const cur = num[i];
    let count = 1;
    
    for (let j = i + 1; j < num.length; j++) {
      if (num[j] === cur) {
        count++;
      } else {
        break;
      }
    }
    
    if (count >= 3) {
      candidates.push(cur);
      
      i += (count - 1);
    }
  }
  
  if (candidates.length === 0) return "";
  
  const nums = candidates.map(el => Number(el));
                              
  return Math.max(...nums).toString().repeat(3);
};
