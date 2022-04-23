function solve(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  let result = [];
  if (arr.length % 2 == 0) {
    for (let i = 0; i < Math.ceil(arr.length / 2); i++) {
      result.push(arr[i]);
      result.push(arr[arr.length - 1 - i]);
    }
  } else {
    for (let i = 0; i < Math.ceil(arr.length / 2); i++) {
      result.push(arr[i]);
      if (i == Math.ceil(arr.length / 2) - 1) {
        break;
      } else {
        result.push(arr[arr.length - 1 - i]);
      }
    }
  }

  return result;
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
