function solve(arr, str1, str2) {
  return arr.slice(arr.indexOf(str1), arr.indexOf(str2) + 1);
}
solve(
  [
    "Pumpkin Pie",
    "Key Lime Pie",
    "Cherry Pie",
    "Lemon Meringue Pie",
    "Sugar Cream Pie",
  ],
  "Key Lime Pie",
  "Lemon Meringue Pie"
);
