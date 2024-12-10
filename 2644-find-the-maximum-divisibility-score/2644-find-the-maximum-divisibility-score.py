class Solution:
    def maxDivScore(self, nums: List[int], divisors: List[int]) -> int:
        list = []
        divisors.sort()

        for divisor in divisors:
          count = 0
          
          for num in nums:
            if num % divisor == 0: count += 1
          
          list.append(count)
        
        return divisors[list.index(max(list))]
      