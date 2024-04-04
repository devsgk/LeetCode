/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
  let result = "";
  
  for (let i = 0; i < command.length; i++) {
    if (command[i] === "(" && command[i + 1] === ")") {
      result += "o";
      i++;
    } else if (command[i] === "(") {
      result += "al";
      i += 3;
    } else {
      console.log(result)
      result += 'G';
    }
  }
  
  return result;
};