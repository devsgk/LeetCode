class Solution:
  def decodeString(self, s: str) -> str:
    stack = []
    cur_str = ""
    cur_num = 0

    for char in s:
      if char.isdigit():
        cur_num = cur_num * 10 + int(char)
      elif char == "[":
        stack.append((cur_str, cur_num))
        cur_str = ""
        cur_num = 0
      elif char == "]":
        last_str, last_num = stack.pop()
        
        cur_str = last_str + cur_str * last_num
      else:
        cur_str += char
  
    return cur_str
