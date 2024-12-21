class Solution:
  def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
    length = len(flowerbed)

    for i in range(len(flowerbed)):
      cur = flowerbed[i]
      prev = flowerbed[i - 1] if i > 0 else 0
      next = flowerbed[i + 1] if i < length - 1 else 0
      
      if cur == 0:
        if i == 0:
          if next != 1:
            flowerbed[i] = 1
            n -= 1
        elif i == length - 1:
          if prev != 1:
            flowerbed[i] = 1
            n -= 1
        else:
          if prev != 1 and next != 1:
            flowerbed[i] = 1
            n -= 1
      
      if n <= 0:
        return True
    
    return n <= 0
