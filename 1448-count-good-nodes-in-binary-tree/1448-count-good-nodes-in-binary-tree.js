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
var goodNodes = function (root) {
  let count = 0;

  function dfs(root, maxValue) {
    if (!root) return;
    
    if (root.val >= maxValue) count++;
    
    maxValue = Math.max(maxValue, root.val);
    
    dfs(root.left, maxValue);
    dfs(root.right, maxValue);
  }
  
  dfs(root, root.val);
  
  return count;
}
