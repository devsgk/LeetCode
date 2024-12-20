class Solution:
  def longestOnes(self, nums: List[int], k: int) -> int:
    left = 0
    right = 0
    maxLen = 0
    zeroCount = 0
    
    for num in nums:
      if num == 0:
        zeroCount += 1
      
      while zeroCount > k:
        if nums[left] == 0:
          zeroCount -= 1

        left += 1
        
      
      right += 1
      
      maxLen = max(maxLen, right - left)
    
    return maxLen
