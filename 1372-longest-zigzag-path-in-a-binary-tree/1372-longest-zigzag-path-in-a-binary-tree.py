# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
  def longestZigZag(self, root: Optional[TreeNode]) -> int:
    max_count = 0
    
    def dfs(root, direction, count):
      nonlocal max_count

      if not root:
        return

      max_count = max(max_count, count)

      if direction == "left":
        dfs(root.right, "right", count + 1)
        dfs(root.left, "left", 1)
      else:
        dfs(root.left, "left", count + 1)
        dfs(root.right, "right", 1)
      
    dfs(root.left, "left", 1)
    dfs(root.right, "right", 1)

    return max_count
