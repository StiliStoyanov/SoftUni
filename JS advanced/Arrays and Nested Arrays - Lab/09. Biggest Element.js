function solve(input) {
  let biggest = Number.NEGATIVE_INFINITY;
  for (let arr of input) {
    for (let el of arr) {
      if (el > biggest) {
        biggest = el;
      }
    }
  }
  console.log(biggest);
}
solve([
  [3, 5, 7, 12],
  [-1, 4, 33, 2],
  [8, 3, 0, 4],
]);
