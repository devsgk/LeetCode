/**
 * @param {string[]} instructions
 * @param {number[]} values
 * @return {number}
 */
var calculateScore = function(instructions, values) {
  let index = 0;
  let result = 0;
  const visited = {};

  while (index >= 0 && index < instructions.length) {
    visited[index] = true;

    const inst = instructions[index];
    const value = values[index];

    if (inst === "jump") {
      index += value;
    } else {
      index += 1;
      result += value;
    }

    if (visited[index]) break;
  }

  return result;
};
