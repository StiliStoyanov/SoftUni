function solve(arr) {
    let sumsRow = []
    let sumsCol = []
    for (let i = 0; i < arr.length; i++) {
        let sumOfRow = 0 
        let sumOfCol = 0
        for (let j = 0; j < arr.length; j++) {
            sumOfRow += arr[i][j]
            sumOfCol += arr[j][i]
        }
        sumsRow.push(sumOfRow)
        sumsCol.push(sumOfCol)
    }
   function rowAllEqual(sumsRow) {
        return new Set(sumsRow).size == 1;
      }
      function colAllEqual(sumOfCol) {
        return new Set(sumOfCol).size == 1;
      }
      let result1 = rowAllEqual(sumsRow)
      let result2 = colAllEqual(sumsCol)

      if (result1 && result2) {
          console.log(true);
      }
      else{
          console.log(false);
      }    
}
solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   )