# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
  def isCousins(self, root: Optional[TreeNode], x: int, y: int) -> bool:
    if not root:
      return False

    queue = deque([(root, 0, None)])
    x_info = { "parent": None, "depth": None }
    y_info = { "parent": None, "depth": None }
    
    while queue:
      node, depth, parent = queue.popleft()
      
      if node.val == x:
        x_info["parent"] = parent
        x_info["depth"] = depth

      if node.val == y:
        y_info["parent"] = parent
        y_info["depth"] = depth

      if x_info["depth"] is not None and y_info["depth"] is not None:
        break

      if node.left:
        queue.append((node.left, depth + 1, node))
      if node.right:
        queue.append((node.right, depth + 1, node))
    
    return x_info["parent"] != y_info["parent"] and x_info["depth"] == y_info["depth"]
