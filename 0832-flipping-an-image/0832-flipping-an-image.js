/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
  const length = image.length;
  
  for (const arr of image) {
    arr.reverse();
  }
  
  const flattened = image.flat(2);
  
  const output = [];
  let sub = [];
  
  for (const el of flattened) {
    if (el === 1) {
      sub.push(0);
    } else {
      sub.push(1);
    }
    
    if (sub.length === length) {
      output.push(sub);
      sub = [];
    }
  }
  
  return output;
};
