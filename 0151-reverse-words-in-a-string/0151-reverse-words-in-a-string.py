class Solution:
    def reverseWords(self, s: str) -> str:
        arr = s.split()
        arr.reverse()
        result = []

        for word in arr:
            result.append(word)
        
        return " ".join(result)
