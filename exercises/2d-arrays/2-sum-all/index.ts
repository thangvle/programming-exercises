export function sumAll(grid: number[][]): number {
  let result = 0;

  for (let row = 0; row < grid.length; row++){
    let currentRow = grid[row]
    if (!currentRow) continue
    for (let col = 0; col < currentRow.length; col++){
      if (!currentRow[col]) continue
      result += currentRow[col]
    }
  }
  return result
}
