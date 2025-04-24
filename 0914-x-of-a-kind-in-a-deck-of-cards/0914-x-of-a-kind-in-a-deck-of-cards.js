/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  if (deck.length === 1) return false;

  const freq = {};

  for (const num of deck) {
    freq[num] = freq[num] ? freq[num] + 1 : 1;
  }

  let gcd = 1;
  let count = 1;
  const values = Object.values(freq);
  let min = Math.min(...values);

  while (count <= min) {
    const canDivide = values.every(value => value % count === 0);

    if (canDivide) gcd = count;

    count++;
  }

  const newValues = [];

  for (let [key, value] of Object.entries(freq)) {
    const newValue = value - gcd;

    newValues.push(newValue);
  }

  if (gcd === 1) {
    return newValues.every(value => value === 0);
  } else {
    return newValues.every(value => value % gcd === 0);
  }
}
