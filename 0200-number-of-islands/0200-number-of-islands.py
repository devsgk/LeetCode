class Solution:
  def numIslands(self, grid: List[List[str]]) -> int:
    count = 0
    max_row = len(grid) - 1
    max_col = len(grid[0]) - 1

    def bfs(row, col):
      grid[row][col] = "0"
      queue = deque([(row, col)])

      while queue:
        row, col = queue.popleft()

        for x, y in [(0, 1), (0, -1), (-1, 0), (1, 0)]:
          new_row, new_col = row + x, col + y

          if 0 <= new_row <= max_row and 0 <= new_col <= max_col and grid[new_row][new_col] == "1":
            grid[new_row][new_col] = "0"
            queue.append((new_row, new_col))

    for i in range(0, len(grid)):
      for j in range(0, len(grid[0])):
        if grid[i][j] == "1":
          count += 1

          bfs(i, j)

    return count
