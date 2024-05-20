/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
  let queue = [];
  let sum = 0;
  
  queue.push(root);
  
  while (queue.length) {  
    const length = queue.length;
    sum = 0;
    
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      const left = node.left;
      const right = node.right;
      
      sum += node.val;
      
      if (left) queue.push(left);
      if (right) queue.push(right);
    }
  }
  
  return sum;
};