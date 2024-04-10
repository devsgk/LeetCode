/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
  const str = String(num);
  const arr = str.split("");
  let num1 = "", num2 = "";
  
  arr.sort((a, b) => a - b);

  arr.forEach((el,i ) => {
    if (i % 2 === 0) num1 += el;
    else num2 += el;
  });
  

  return Number(num1) + Number(num2);
};