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
 * @return {TreeNode}
 */
var bstToGst = function(root) {
  const queue = [];
  const arr = [];
  
  queue.push(root);
  arr.push(root.val);
  
  while (queue.length) {
    const popped = queue.pop();
    const left = popped.left;
    const right = popped.right;
    
    if (left) {
      queue.push(left);
      arr.push(left.val);
    }
    
    if (right) {
      queue.push(right);
      arr.push(right.val);
    }
  }
  
  queue.push(root);
  
  while (queue.length) {
    const popped = queue.pop();
    const left = popped.left;
    const right = popped.right;
    
    popped.val += arr.filter(el => el > popped.val).reduce((acc, cur) => acc + cur, 0);
    
    if (left) {
      queue.push(left);
    }
    if (right) {
      queue.push(right);
    }
  }
  
  return root;
};