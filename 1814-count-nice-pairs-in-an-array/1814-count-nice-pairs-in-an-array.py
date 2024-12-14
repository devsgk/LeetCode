class Solution:
  def countNicePairs(self, nums: List[int]) -> int:
    MOD = 10 ** 9 + 7
    arr = [num - int(str(num)[::-1]) for num in nums]
    count = 0
    freq = {}
    
    for cur in arr:
      if cur in freq:
        count = (count + freq[cur]) % MOD
      
      freq[cur] = freq.get(cur, 0) + 1
      
    return count
