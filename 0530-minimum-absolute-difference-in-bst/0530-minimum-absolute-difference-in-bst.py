# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
  def getMinimumDifference(self, root: Optional[TreeNode]) -> int:
    difference = float("inf")

    def dfs(root):
      nonlocal difference

      if not root:
        return
      
      if root.left:
        difference = min(abs(root.val - root.left.val), difference)

        dfs(root.left)
      if root.right:
        difference = min(abs(root.val - root.right.val), difference)

        dfs(root.right)

    dfs(root)

    return difference
