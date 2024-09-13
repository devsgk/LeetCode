/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
  const arr = date.split("-");
  const output = [];

  for (const num of arr) {
    const binary = Number(num).toString(2);

    output.push(binary);
  }
  
  return output.join("-")
};
