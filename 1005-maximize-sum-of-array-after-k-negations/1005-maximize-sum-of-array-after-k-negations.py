class Solution:
  def largestSumAfterKNegations(self, nums: List[int], k: int) -> int:
    nums.sort()

    for i in range(0, len(nums)):
      if k > 0 and nums[i] < 0:
        nums[i] = -nums[i]
        k -= 1

    if k % 2 == 1 and 0 not in nums:
      min_abs = min(nums, key = abs)
      nums[nums.index(min_abs)] *= -1

    return sum(nums)
