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
 * @return {boolean}
 */
var isBalanced = function(root) {
  function dfs(node) {
    if (node === null) return 0;

    const leftDepth = dfs(node.left);
    const rightDepth = dfs(node.right);

    if (leftDepth === -1 || rightDepth === -1) return -1;
    if (Math.abs(leftDepth - rightDepth) > 1) return -1;

    return Math.max(leftDepth, rightDepth) + 1;
  }

  if (root === null) return true;

  if (dfs(root) === -1) return false;

  return true;
};
