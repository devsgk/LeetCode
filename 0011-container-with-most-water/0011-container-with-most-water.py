class Solution:
  def maxArea(self, height: List) -> int:
    left = 0
    right = len(height) - 1
    maximum = 0

    while left < right:
      x_axis = right - left
      y_axis = min(height[left], height[right])
      area = x_axis * y_axis

      maximum = max(maximum, area)

      if height[left] < height[right]:
        left += 1
      else:
        right -= 1

    return maximum
