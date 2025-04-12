class Solution:
  def findDifference(self, nums1: List[int], nums2: List[int]) -> List[List[int]]:
    unique1 = set(nums1)
    unique2 = set(nums2)
    diff1 = list(unique1 - unique2)
    diff2 = list(unique2 - unique1)

    return [diff1, diff2]
