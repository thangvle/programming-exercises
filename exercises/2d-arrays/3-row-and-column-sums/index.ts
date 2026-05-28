export function rowSums(grid: number[][]): number[] {
  let rowSumResult = []
  let rowResult = 0
  // collect number in row, sum, then add to result
  // if row
  for (let row = 0; row < grid.length; row++){
    let currentRow = grid[row]
    if (!currentRow) continue
    for (let col = 0; col < currentRow.length; col++){
      rowResult += currentRow[col]
      
    }
    rowSumResult.push(rowResult)
    rowResult = 0
  }
  return rowSumResult
}

export function columnSums(grid: number[][]): number[] {
  // iterate col outer loop
  // iterate row inner loop
  // add the sum to the temp result
  // if reach end of column, push temp result to result array
  // reset the temp result to 0 in the outer loop
  // 
  // return an array of column sum

  let colSumArray: number[] = []
  let colResult: number = 0

  let firstRow = grid[0]
  if (!firstRow) return [] 
  for (let col = 0; col < firstRow.length; col++){
    for (let row = 0; row < grid.length; row++){
      let currentRow = grid[row]
      if (!currentRow) continue
      colResult = colResult + currentRow[col]
    }
    colSumArray.push(colResult)
    colResult = 0
  }

  return colSumArray

}
