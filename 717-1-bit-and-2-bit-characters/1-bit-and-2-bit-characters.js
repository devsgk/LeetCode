/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
  if (bits.at(-1) === 0) {
    let count = 0;

    for (let i = bits.length - 2; i >= 0; i--) {
      const cur = bits[i];

      if (cur === 1) count++;
      else break;
    }

    if (count % 2 === 0) return true;
    else return false;
  } else return false;
};
