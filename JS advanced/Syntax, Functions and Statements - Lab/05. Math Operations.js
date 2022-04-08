function solve(num1, num2, string) {
    let result;
  switch (string) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
    case "%":
      result = num1 % num2;
    case "**":
      result = num ** num2;
  }
  console.log(result );
}
solve(3, 5.5, "*");
