# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
  def lowestCommonAncestor(self, root: "TreeNode", p: "TreeNode", q: "TreeNode") -> "TreeNode":
    queue = deque([(root, None)])
    parent_map = {}

    while queue:
      node, parent = queue.popleft()
      
      if node:
        parent_map[node] = parent

        if node == p or node == q:
          if p in parent_map and q in parent_map:
            break
      
      if node.left:
        queue.append((node.left, node))
      if node.right:
        queue.append((node.right, node))
    
    ancestors = set()
    
    while p:
      ancestors.add(p)
      p = parent_map[p]
    
    while q not in ancestors:
      q = parent_map[q]

    return q
