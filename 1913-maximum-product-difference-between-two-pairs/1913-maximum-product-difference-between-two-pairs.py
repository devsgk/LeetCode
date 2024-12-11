from typing import List

class Solution:
    def maxProductDifference(self, nums: List[int]) -> int:
        nums.sort()
        first = nums[0] * nums[1]
        second = nums[-1] * nums[-2]

        return second - first
        