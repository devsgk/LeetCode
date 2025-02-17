class Solution:
  def orangesRotting(self, grid: List[List[int]]) -> int:
    if len(grid) == 0:
      return -1

    time = 0
    fresh_count = 0
    max_row = len(grid)
    max_col = len(grid[0])
    queue = deque()

    for i in range(0, len(grid)):
      for j in range(0, len(grid[0])):
        if grid[i][j] == 2:
          queue.append((i, j))
        elif grid[i][j] == 1:
          fresh_count += 1

    
    while queue and fresh_count > 0:
      time += 1
      
      for _ in range(len(queue)):
        
        row, col = queue.popleft()

        for x, y in [(0, 1), (0, -1), (-1, 0), (1 ,0)]:
          new_row, new_col = row + x, col + y

          if 0 <= new_row < max_row and 0 <= new_col < max_col and grid[new_row][new_col] == 1:
            fresh_count -= 1
            grid[new_row][new_col] = 2
            queue.append((new_row, new_col))

    return time if fresh_count == 0 else -1
