class Solution:
    def minimumBoxes(self, apple: List[int], capacity: List[int]) -> int:
        totalApples = reduce(lambda acc, cur: acc + cur, apple)
        sortedBoxes = sorted(capacity, reverse = True)
        count = 0

        for box in sortedBoxes:
            totalApples -= box
            count += 1

            if totalApples <= 0:
                break;
        
        return count
      