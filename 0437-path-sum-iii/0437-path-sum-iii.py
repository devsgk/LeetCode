# class TreeNode:
#   def __init__(self, val=0, left=None, right=None):
#     self.val = val
#     self.left = left
#     self.right = right

class Solution:
  def pathSum(self, root: Optional[TreeNode], targetSum: int) -> int:
    count = 0

    def dfsFromNode(root, cur_sum):
      nonlocal count

      if not root:
        return
      
      cur_sum += root.val

      if cur_sum == targetSum:
        count += 1
      
      dfsFromNode(root.left, cur_sum)
      dfsFromNode(root.right, cur_sum)
    
    def dfs(root):
      if not root:
        return
      
      dfsFromNode(root, 0)
      dfs(root.left)
      dfs(root.right)
    
    dfs(root)

    return count
