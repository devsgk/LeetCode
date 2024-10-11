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
 * @return {number[]}
 */
var findMode = function(root) {
  const obj = {};
  
  function inOrder(node) {
    if (node === null) return;
    
    inOrder(node.left);
    inOrder(node.right);
    obj[node.val] = obj[node.val] ? obj[node.val] + 1 : 1;
  }
  
  inOrder(root);
  
  const max = Math.max(...Object.values(obj));
  const modes = Object.keys(obj).filter(key => obj[key] === max).map(Number);
  
  return modes;
};
