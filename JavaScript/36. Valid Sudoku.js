// https://leetcode.com/problems/valid-sudoku/
var isValidSudoku = function(board) {
  // Check rows.
  for (let i = 0; i < 9; i++) {
    if (repetition(board[i])) {
      return false
    }
  }

  // Check columns.
  for (let i = 0; i < 9; i++) {
    const column = board.map((item) => item[i])
    if (repetition(column)) {
      return false
    }
  }

  // Check grids.
  for (let y = 0; y < 9; y += 3) {
    for (let x = 0; x < 9; x += 3) {
      const flatGrid = flattenGrid(board, x, y)
      if (repetition(flatGrid)) {
        return false
      }
    }
  }

  return true
}

const flattenGrid = function (board, leftX, topY) {
  const output = []
  for (let y = topY; y < topY + 3; y++) {
    for (let x = leftX; x < leftX + 3; x++) {
      output.push(board[y][x])
    }
  }
  return output
}

const repetition = function (numbers) {
  const duplicates = numbers.filter((item, index) => (item !== '.') ? numbers.indexOf(item) !== index : false)
  return duplicates.length > 0
}
