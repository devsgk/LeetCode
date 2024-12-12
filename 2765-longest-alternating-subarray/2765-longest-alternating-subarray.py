from typing import List

class Solution:
    def alternatingSubarray(self, nums: List[int]) -> int:
        max_length = -1

        for i in range(len(nums)):
            length = 1
            prev = nums[i]
            is_inc = True

            for j in range(i + 1, len(nums)):
                next_num = nums[j]
                
                if is_inc and prev + 1 == next_num:
                    length += 1
                    is_inc = False
                elif not is_inc and prev - 1 == next_num:
                    length += 1
                    is_inc = True
                else:
                    break
                    
                prev = next_num
            
            if length > 1:
              max_length = max(max_length, length)

        return max_length
