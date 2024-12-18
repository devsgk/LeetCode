import math
class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        minLen = min(len(str1), len(str2))
        answer = ""
        candidates = []

        for i in range(0, minLen):
            if (str1[i] == str2[i]):
                answer += str1[i]

                if (str1.replace(answer, "") == "" and str2.replace(answer, "") == ""):
                    candidates.append(answer)
            else:
                break;

        return max(candidates, key = len) if candidates else ""
