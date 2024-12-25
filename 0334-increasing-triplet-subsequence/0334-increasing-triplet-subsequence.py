class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        first = float("inf")
        second = float("inf")

        for num in nums:
            if num > first and num > second: return True
            if num > first: second = num
            else: first = num

        return False
