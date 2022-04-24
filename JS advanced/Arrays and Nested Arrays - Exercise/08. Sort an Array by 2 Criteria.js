function solve(arr) {
  arr.sort(function (a, b) {
    if (a.length === b.length) {
      return a.localeCompare(b);
    }
    return a.length - b.length;
  });
  for (let el of arr) {
    console.log(el);
  }
}
solve(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
