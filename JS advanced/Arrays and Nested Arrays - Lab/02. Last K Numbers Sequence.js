function solve(n, k) {
  let result = [];
  result.push(1);
  let count = 1;
  while (count < n) {
    let sum = 0;
    let numsToSum = 0;
    for (let i = result.length - 1; i >= 0; i--) {
      sum += result[i];
      numsToSum++;
      if (numsToSum == k) {
        break;
      }
    }
    result.push(sum);
    count++;
  }
  return result;
}
solve(8, 2);
