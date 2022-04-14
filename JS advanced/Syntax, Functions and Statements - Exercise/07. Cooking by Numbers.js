function solve(num, op1, op2, op3, op4, op5) {
  let arr = [];
  arr.push(num, op1, op2, op3, op4, op5);
  let number = Number(arr.shift());
  let count = 1;
  while (count <= 5) {
    let command = arr.shift();
    if (command == "chop") {
      number /= 2;
      console.log(number);
    } else if (command == "dice") {
      number = Math.sqrt(number);
      console.log(number);
    } else if (command == "spice") {
      number += 1;
      console.log(number);
    } else if (command == "bake") {
      number *= 3;
      console.log(number);
    } else if (command == "fillet") {
      number *= 0.8;
      console.log(number);
    }
    count++;
  }
}
solve("9", "dice", "spice", "chop", "bake", "fillet");
