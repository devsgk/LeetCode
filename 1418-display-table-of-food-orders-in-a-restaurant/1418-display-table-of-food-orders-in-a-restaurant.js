/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function(orders) {
  const obj = {};
  const result = new Set();
  
  for (const order of orders) {
    const tableNumber = order[1];
    const food = order[2];

    result.add(food);
    
    if (obj[tableNumber]) {
      obj[tableNumber].push(food);
    } else {
      obj[tableNumber] = [];
      obj[tableNumber].push(food);
    }
  }
  
  const resultArr = [...result].sort();
  const final = [];
  
  for (const [key, value] of Object.entries(obj)) {
    const output = [key];
    
    for (const food of resultArr) {
      if (value.includes(food)) {
        const length = value.filter(el => el === food).length;
        
        output.push(length.toString());
      } else {
        output.push("0");
      }
    }
    final.push(output);
  }

  final.sort((a, b) => a[0] - b[0]);
  resultArr.unshift("Table");
  final.unshift(resultArr);
  
  return final;
};
