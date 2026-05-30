// export function traverseRowByRow(grid: number[][]): number[] {
//   let result: number[] = [];

//   for (let row = 0; row < grid.length; row++) {
//     const currentRow = grid[row];
//     if (!currentRow) continue;
//     for (let col = 0; col < currentRow.length; col++) {
//       if (currentRow[col] !== undefined) {
//         result.push(currentRow[col] ?? 0);
//       }
//     }
//   }
//   return result;
// }

export function traverseColumnByColumn(grid: number[][]): number[] {
  let result: number[] = [];

  for (let col = 0; col < grid[0]?.length; col++) {
    for (let row = 0; row < grid.length; row++) {
      result.push(grid[row][col]);
    }
  }
  return result;
}
