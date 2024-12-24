from typing import List
from functools import reduce

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        non_zero_nums = [num for num in nums if num != 0]
        zero_nums = [num for num in nums if num == 0]

        total_product_with_zero = reduce(lambda a, b: a * b, non_zero_nums) if non_zero_nums else 0
        
        if len(zero_nums) >= 2: return [0] * len(nums)
        if len(zero_nums) == 1: return [total_product_with_zero if num == 0 else 0 for num in nums]
        else : return [total_product_with_zero // num for num in nums]
