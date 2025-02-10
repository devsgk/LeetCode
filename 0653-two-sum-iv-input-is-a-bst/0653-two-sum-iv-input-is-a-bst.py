# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
  def findTarget(self, root: Optional[TreeNode], k: int) -> bool:
    unique = set()

    def dfs(root):
      if not root:
        return

      if (k - root.val) in unique:
        return True

      unique.add(root.val)

      if dfs(root.left) == True or dfs(root.right) == True:
        return True
      else:
        return False

    return dfs(root)
