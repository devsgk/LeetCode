/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let five = 0;
  let ten = 0;
  
  for (const bill of bills) {
    if (bill === 5) {
      five++;
    } else if (bill === 10) {
      if (five >= 1) {
        ten++;
        five--;
      } else {
        return false;
      }
    } else {
      if (five >= 1 && ten >= 1) {
        ten--;
        five--;
      } else if (five >= 3) {
        five -= 3;
      } else {
        return false;
      }
    }
  }
  
  return true;
};