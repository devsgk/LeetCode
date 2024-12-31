class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        left = 0
        flip_count = 0
        maximum = 0

        for right in range(0, len(nums)):
            if nums[right] == 0:
                flip_count += 1
            
            while flip_count > k:
                if nums[left] == 0:
                    flip_count -= 1
                
                left += 1
            
            maximum = max(maximum, right - left + 1)
        
        return maximum
