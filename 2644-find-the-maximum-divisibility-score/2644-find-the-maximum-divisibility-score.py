class Solution:
    def maxDivScore(self, nums: List[int], divisors: List[int]) -> int:
        result = []
        
        for divisor in divisors:
          count = 0
        
          for num in nums:
            if num % divisor == 0: count += 1
          
          result.append([divisor, count])

        result.sort(key = lambda x: (-x[1], x[0]))
        
        return result[0][0]