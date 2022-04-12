function solve(num) {
  let sum = 0;
  let numToString = String(num);
  let isSame = true;
  for (let index = 0; index < numToString.length; index++) {
    sum += Number(numToString[index]);
    if (index == numToString.length - 1) {
      break;
    } else {
      if (numToString[index] != numToString[index + 1]) {
        isSame = false;
      }
    }
  }
  if (isSame == false) {
    console.log(false);
  } else {
    console.log(true);
  }
  console.log(sum);
}
solve(2222222);
solve(1234);
