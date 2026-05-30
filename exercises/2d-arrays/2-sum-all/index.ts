export function sumAll(grid: number[][]): number {
  let result = 0;

  for (let row = 0; row < grid.length; row++) {
    const currentRow = grid[row];
    if (!currentRow) continue;
    for (let col = 0; col < currentRow.length; col++) {
      result = result + currentRow[col]!;
    }
  }
  return result;
}
