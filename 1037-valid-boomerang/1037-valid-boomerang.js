/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
  const [first, second, third] = [...points];
  if (first[0] === second[0] && first[0] === third[0]) return false;
  
  const slope1 =  (first[1] - second[1]) / (first[0] - second[0]);
  const slope2 = (first[1] - third[1]) / (first[0] - third[0]);
  const slope3 = (second[1] - third[1]) / (second[0] - third[0]);
  
  return slope1 !== slope2 && slope2 !== slope3 && slope1 !== slope3;
};
