# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
  def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
    if not root:
      return []

    queue = deque([(root, 0)])
    values = defaultdict(list)

    while queue:
      node, depth = queue.popleft()
      
      values[depth].append(node.val)
      
      if node.left:
        queue.append((node.left, depth + 1))
      
      if node.right:
        queue.append((node.right, depth + 1))
    
    return [values[key] for key in sorted(values.keys())]
