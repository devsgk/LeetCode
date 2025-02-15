class Solution:
  def solve(self, board: List[List[str]]) -> None:
    row_max = len(board) -1
    col_max = len(board[0]) -1

    def bfs(i, j):
      board[i][j] = "E"
      queue = deque([(i, j)])

      while queue:
        row, col = queue.popleft()

        for x, y in [(0, 1), (0, -1), (-1, 0), (1, 0)]:
          new_row, new_col = row + x, col + y

          if 0 <= new_row <= row_max and 0 <= new_col <= col_max and board[new_row][new_col] == "O":
            board[new_row][new_col] = "E"
            queue.append((new_row, new_col))

    for i in range(len(board)):
      for j in range(len(board[0])):
        if (i == 0 or i == row_max or j == 0 or j == col_max) and board[i][j] == "O":
          bfs(i, j)

    for i in range(len(board)):
      for j in range(len(board[0])):
        if board[i][j] == "O":
          board[i][j] = "X"
        elif board[i][j] == "E":
          board[i][j] = "O"

    return board
