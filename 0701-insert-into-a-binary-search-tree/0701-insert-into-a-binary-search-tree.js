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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
  const originalRoot = root;
  if (!root) return new TreeNode(val);

  while (root) {
    if (root.val > val) {
      if (!root.left) {
        root.left = new TreeNode(val);

        return originalRoot;
      }
      
      root = root.left;
    } else {
      if (!root.right) {
        root.right = new TreeNode(val);

        return originalRoot;
      }
      
      root = root.right;
    }
  }
}
