class Solution:
    def maxArea(self, height: List) -> int:
        left = 0
        right = len(height) - 1
        maximum = 0

        while left < right:
            area = (right - left) * min(height[left], height[right])
            maximum = max(maximum, area)

            if height[left] < height[right]:
                left += 1
            else:
                right -= 1
        
        return maximum
