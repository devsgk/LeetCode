class Solution:
  def removeStars(self, s: str) -> str:
    arr = list(s)
    non_star_arr = []

    for i in range(0, len(arr)):
      cur = arr[i]

      if cur != "*":
        non_star_arr.append(i)


      if cur == "*":
        arr[i] = ""

        arr[non_star_arr.pop()] = ""

    return "".join(arr)
