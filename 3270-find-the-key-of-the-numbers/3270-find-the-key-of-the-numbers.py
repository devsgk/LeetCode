class Solution:
    def generateKey(self, num1: int, num2: int, num3: int) -> int:
        str1 = str(num1).rjust(4, "0")
        str2 = str(num2).rjust(4, "0")
        str3 = str(num3).rjust(4, "0")
        result = ""

        for i in range(0, 4):
            minimum = min(str1[i], str2[i], str3[i])
            result += minimum

        return int(result)
      