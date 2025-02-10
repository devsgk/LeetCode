# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
  def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
    if not nums:
      return None

    mid_index = len(nums) // 2
    root = TreeNode(nums[mid_index])

    left_tree = nums[0:mid_index]
    right_tree = nums[mid_index + 1:]

    root.left = self.sortedArrayToBST(left_tree)
    root.right = self.sortedArrayToBST(right_tree)

    return root
