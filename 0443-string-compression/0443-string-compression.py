from typing import List

class Solution:
    def compress(self, chars: List[str]) -> int:
        result = ""
        count = 1

        for i in range(0, len(chars) - 1):
            if chars[i] == chars[i + 1]:
                count += 1
            else:
                if count > 1:
                    result += chars[i] + str(count)
                else:
                    result += chars[i]
                
                count = 1

        if count > 1:
            result += chars[-1] + str(count)
        else:
            result += chars[-1]

        index = 0

        for char in result:
            chars[index] = char
            index += 1
            
        return len(result)
