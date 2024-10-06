/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
  const arr = num.split("");

  for (let i = 0; i < arr.length; i++) {
    const count = arr.filter(el => Number(el) === i).length;
    
    if (count !== Number(arr[i])) {
      return false;
    }
  }
  
  return true;
};
