function solve(input) {
  console.log(sum(input));
  console.log(sumInverse(input));
  console.log(concat(input));

  function sum(array) {
    sumOfArray = 0;
    for (const num of array) {
      sumOfArray += num;
    }
    return sumOfArray;
  }
  function sumInverse(array) {
    sumOfArray = 0;
    for (const num of array) {
      let numToAdd = 1 / num;
      sumOfArray += numToAdd;
    }
    return sumOfArray;
  }
  function concat(array) {
    result = "";
    for (const num of array) {
      result += num;
    }
    return result;
  }
}
solve([2, 4, 8, 16]);
