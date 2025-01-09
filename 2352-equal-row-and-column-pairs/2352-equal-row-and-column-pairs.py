class Solution:
  def equalPairs(self, grid: List[List[int]]) -> int:
    dict = {}
    count = 0

    for row in grid:
      row_tuple = tuple(row)
      dict[row_tuple] = dict.get(row_tuple, 0) + 1

    for col_index in range(len(grid[0])):
      col = tuple(grid[row_index][col_index] for row_index in range(len(grid)))

      if col in dict:
        count += dict[col]

    return count
