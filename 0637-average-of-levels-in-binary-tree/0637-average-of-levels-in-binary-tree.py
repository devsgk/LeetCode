# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def averageOfLevels(self, root: Optional[TreeNode]) -> List[float]:
      if not root:
        return 0

      values_map = defaultdict(list)
      queue = deque([(root, 0)])
      
      while queue:
        node, level = queue.popleft()
        
        values_map[level].append(node.val)
        
        if node.left:
          queue.append((node.left, level + 1))
      
        if node.right:
          queue.append((node.right, level + 1))
      
      ans = []
      
      for level in values_map.keys():
        length = len(values_map[level])
        average = round(sum(values_map[level]) / length, 5)
        ans.append(average)
      
      return ans
