/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
  let result = "";
  let str = s;
  
  while (true) {
    let shouldStop = true;

    for (let i = 0; i < str.length - 1; i++) {
      const condition1 = str[i].toLowerCase() === str[i + 1].toLowerCase();
      const condition2 = str[i].charCodeAt(0) !== str[i + 1].charCodeAt(0);
      
      if (condition1 && condition2) {
        shouldStop = false;
        str = str.slice(0, i) + str.slice(i + 2);
        
        break;
      }
    }
    
    if (shouldStop) {
      break;
    }
  }
  
  return str;
};
