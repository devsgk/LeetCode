/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
  if(!s.includes("|")) {
    const arr = s.split("");
    const filteredArr = arr.filter(el => el === "*");
    
    return filteredArr.length;
  }
  
  const arr = s.split("|");
  let result = "";
  
  for (let i = 0; i < arr.length; i += 2) {
    result += arr[i];
  }
  
  const resultArr = result.split("");
  const filteredArr = resultArr.filter(el => el === "*");;

  return filteredArr.length;
};