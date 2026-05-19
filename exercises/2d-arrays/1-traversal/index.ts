export function traverseRowByRow(grid: number[][]): number[] {
  let result: number[] = [] 

  for (let row = 0; row < grid.length; row++){
    const currentRow = grid[row]
    if (!currentRow) continue
    for (let col = 0; col < currentRow.length; col++){
      result.push(currentRow[col])
    }
  }
  return result
}

export function traverseColumnByColumn(grid: number[][]): number[] {
  let result: number[] = [];

  for (let row= 0; row < grid.length; row++){
    for(let col = 0; col < grid[row]?.length; col++){
      result.push(grid[col][row])
      console.log(result)
    }
  }
  return result
}
