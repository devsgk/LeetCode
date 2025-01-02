class Solution:
  def pivotIndex(self, nums: List[int]) -> int:
    total_sum = reduce(lambda x, y: x + y, nums, 0)
    cur_sum = 0

    for i in range(0, len(nums)):
      cur = nums[i]
      cur_sum += cur

      if (total_sum - cur) / 2 == (cur_sum - cur):
        return i

    return -1
