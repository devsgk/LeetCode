/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function(s) {
  let length = s.length;
  
  
  while (length !== 2) {
    const newDigits = [];

    for (let i = 0; i < s.length - 1; i++) {
      const first = Number(s[i]);
      const second = Number(s[i + 1]);
      const newDigit = (first + second) % 10;

      newDigits.push(newDigit);
    }

    s = newDigits.join("");
    length = s.length;
  }
  
  return s[0] === s[1];
};
