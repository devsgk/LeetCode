/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
  const arr = Array(26).fill(0);
  const result = [];
  
  for (let i = 0; i < s.length; i++) {
    const charCode = s[i].charCodeAt(0) - 97;

    arr[charCode] += 1;
  }

  while (result.length < s.length) {
    for (let i = 0; i < 26; i++) {
      if (arr[i] > 0) {
        result.push(String.fromCharCode(i + 97));
        arr[i] -= 1;
      }
    }

    for (let i = 25; i >= 0; i--) {
      if (arr[i] > 0) {
        result.push(String.fromCharCode(i + 97));
        arr[i] -= 1;
      }
    }
  }

  return result.join('');
};
