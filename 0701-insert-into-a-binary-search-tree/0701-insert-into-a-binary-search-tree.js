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
  let cur = root;
  const newNode = new TreeNode(val);
  
  if (!root) {
    return newNode;
  }
  
  while (cur) {
    if (cur.val < val) {
      if (cur.right) {
        cur = cur.right
      } else {
        cur.right = newNode;
        break;
      }
    } else if (cur.val > val) {
      if (cur.left) {
        cur = cur.left;
      } else {
        cur.left = newNode;
        break;
      }
    }
  }
  
  return root;
};