# class TreeNode:
#   def __init__(self, val=0, left=None, right=None):
#     self.val = val
#     self.left = left
#     self.right = right

class Solution:
  def pathSum(self, root: Optional[TreeNode], targetSum: int) -> int:
    count = 0
    
    def outer_dfs(root):
      if not root:
        return

      inner_dfs(root, 0)

      outer_dfs(root.left)
      outer_dfs(root.right)
      
    def inner_dfs(root, cur_sum):
      nonlocal count

      if not root:
        return
      
      cur_sum += root.val
      
      if cur_sum == targetSum:
        count += 1
      
      inner_dfs(root.left, cur_sum)
      inner_dfs(root.right, cur_sum)
    
    outer_dfs(root)
    
    return count
