class Solution:
  def search(self, nums: List[int], target: int) -> int:
    left = 0
    right = len(nums) - 1

    while left <= right:
      mid_index = (left + right) // 2
      mid_value = nums[mid_index]

      if mid_value < target:
        left = mid_index + 1
      elif mid_value > target:
        right = mid_index - 1
      else:
        return nums.index(mid_value)
    
    return -1
