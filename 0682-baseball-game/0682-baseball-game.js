/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
  const arr = [];
  
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "C") {
      arr.pop();
    } else if (operations[i] === "D") {
      arr.push(arr.at(-1) * 2);
    } else if (operations[i] === "+") {
      const sum = Number(arr[arr.length - 1]) + Number(arr[arr.length - 2]);
      arr.push(sum);
    } else {
      arr.push(operations[i]);
    }
  }
  
  return arr.reduce((acc, cur) => Number(acc) + Number(cur), 0);
};