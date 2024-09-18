/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
  const output = [];
  
  for (let i = 0; i < s.length; i++) {
    if (i % k === 0) {
      output.push(s.slice(i, i + k));
    }
  }
  
  if (output.at(-1).length !== k) {
    const popped = output.pop();
    const newSub = popped + fill.repeat(k - popped.length);

    output.push(newSub);
  }
  
  return output;
};
