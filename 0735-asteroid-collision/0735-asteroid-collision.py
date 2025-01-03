class Solution:
  def asteroidCollision(self, asteroids: List[int]) -> List[int]:
    result = []

    for i in range(0, len(asteroids)):
      cur = asteroids[i]

      while len(result) and result[-1] > 0 and cur < 0:
        if abs(result[-1]) > abs(cur):
          break
        elif abs(result[-1]) < abs(cur):
          result.pop()
          continue
        else:
          result.pop()
          break
      
      else:
        result.append(cur)

    return result
