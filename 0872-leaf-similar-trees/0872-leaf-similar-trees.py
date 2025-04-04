# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
  def leafSimilar(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
    def in_order_dfs(root, leaf_list):
      if not root:
        return

      if not root.left and not root.right:
        leaf_list.append(root.val)

      in_order_dfs(root.left, leaf_list)
      in_order_dfs(root.right, leaf_list)

    leaves1 = []
    leaves2 = []

    in_order_dfs(root1, leaves1)
    in_order_dfs(root2, leaves2)

    return leaves1 == leaves2
