function solve(input) {
  input.sort(function (a, b) {
    return a - b;
  });
  let result = [];
  for (let i = Math.floor(input.length / 2); i < input.length; i++) {
    result.push(input[i]);
  }
  return result;
}
solve([3, 19, 14, 7, 2, 19, 6]);
