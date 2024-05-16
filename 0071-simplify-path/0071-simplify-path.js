/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let result = [];

  path.replaceAll("//", "/");

  const arr = path.split("/").filter(el => {
    if (el !== "" && el !== ".") {
      return el;
    }
  });
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "..") {
      result.pop();
    } else {
      result.push(arr[i]);
    }
  }
  
  const output = "/" + result.join("/")
  
  return output;
};