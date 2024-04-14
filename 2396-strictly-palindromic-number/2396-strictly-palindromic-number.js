/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
  let isPalindromic = true;
  
  for (let i = 2; i <= n - 2; i++) {
    const binary = n.toString(i);
    
    for (let j = 0; j < binary.length / 2; j++) {
      if (binary[j] !== binary[binary.length - j - 1]) {
        isPalindromic = false;
        
        break;
      }
    }
    if (isPalindromic === false) {
      break;
    }
  }
  
  return isPalindromic;
};