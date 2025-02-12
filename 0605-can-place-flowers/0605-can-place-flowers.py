class Solution:
  def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
    count = 0

    for i in range(0, len(flowerbed)):
      cur = flowerbed[i]
      prev = flowerbed[i - 1] if i - 1 >= 0 else 0
      next = flowerbed[i + 1] if i + 1 < len(flowerbed) else 0

      if cur == 0:
        if i == 0:
          if next != 1:
            flowerbed[i] = 1
            count += 1
        elif i == len(flowerbed) - 1:
          if prev != 1:
            flowerbed[i] = 1
            count += 1
        else:
          if prev != 1 and next != 1:
            flowerbed[i] = 1
            count += 1

    return count >= n
