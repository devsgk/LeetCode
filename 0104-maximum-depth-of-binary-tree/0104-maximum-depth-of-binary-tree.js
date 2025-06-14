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
var maxDepth = function(root) {
  function dfs(node, depth) {
    if (node === null) return depth;

    const left = dfs(node.left, depth + 1);
    const right = dfs(node.right, depth + 1);

    return Math.max(left, right);
  }

  return dfs(root, 0);
};
