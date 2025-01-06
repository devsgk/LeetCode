class Solution:
  def findDifference(self, nums1: List[int], nums2: List[int]) -> List[List[int]]:
    unique1 = set(nums1)
    unique2 = set(nums2)
    result = [[], []]

    for num in unique1:
      if num not in unique2:
        result[0].append(num)

    for num in unique2:
      if num not in unique1:
        result[1].append(num)

    return result
