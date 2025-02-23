# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
  def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
    def bfs(root):
      if not root:
        return defaultdict(list)

      queue = deque([(root, 0)])
      level_map = defaultdict(list)

      while queue:
        node, level = queue.popleft()
        
        if node:
          level_map[level].append(node.val)
        else:
          level_map[level].append(None)
        
        if node is not None:
          queue.append((node.left, level + 1))
          queue.append((node.right, level + 1))
      
      return level_map

    level_map1 = bfs(p)
    level_map2 = bfs(q)
    
    return level_map1 == level_map2
