class Solution:
  def longestSubarray(self, nums: List[int]) -> int:
    left = 0
    count = 0
    maximum = 0

    for right in range(0, len(nums)):
      if nums[right] == 0:
        count += 1
      
      while count > 1:
        if nums[left] == 0:
          count -= 1
        
        left += 1
      
      maximum = max(maximum, right - left)
    
    return maximum
