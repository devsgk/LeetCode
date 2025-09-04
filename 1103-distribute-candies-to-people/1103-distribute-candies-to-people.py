class Solution:
    def distributeCandies(self, candies: int, num_people: int) -> List[int]:
      result = [0] * num_people
      count = 1

      while candies > 0:
        give = min(count, candies)

        result[(count - 1) % num_people] += give
        candies -= give
        count += 1
      
      return result
