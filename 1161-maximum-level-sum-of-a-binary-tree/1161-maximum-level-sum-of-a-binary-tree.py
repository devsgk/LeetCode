# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
  def maxLevelSum(self, root: Optional[TreeNode]) -> int:
    sum_map = defaultdict(lambda: 0)
    queue = deque([(root, 1)])

    while queue:
      node, level = queue.popleft()

      sum_map[level] += node.val

      if node.left:
        queue.append((node.left, level + 1))
      if node.right:
        queue.append((node.right, level + 1))

    min_level = float("inf")
    max_sum = float("-inf")

    for level, sum in sum_map.items():
      if sum > max_sum:
        max_sum = sum
        min_level = level
      else:
        if sum == max_sum:
          if level < min_level:
            min_level = level
          

    return min_level
