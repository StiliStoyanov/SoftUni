function solve(input) {
  let sumMain = 0;
  let sumSec = 0;

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (i == j) {
        sumMain += input[i][j];
      }
      if (i + j == input.length - 1) {
        sumSec += input[i][j];
      }
    }
  }

  console.log(sumMain, sumSec);
}
solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   );
