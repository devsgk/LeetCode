class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        maxCandy = max(candies)
        result = []
        
        for kid in candies:
            if kid + extraCandies >= maxCandy:
                result.append(True)
            else: 
                result.append(False)
        
        return result
