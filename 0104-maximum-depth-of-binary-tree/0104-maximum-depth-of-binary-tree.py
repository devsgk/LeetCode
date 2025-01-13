# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
  def maxDepth(self, root: Optional[TreeNode]) -> int:
    def in_order_dfs(root, depth):
      if not root:
        return depth

      left_depth = in_order_dfs(root.left, depth + 1)
      right_depth = in_order_dfs(root.right, depth + 1)

      return max(left_depth, right_depth)

    return in_order_dfs(root, 0)
