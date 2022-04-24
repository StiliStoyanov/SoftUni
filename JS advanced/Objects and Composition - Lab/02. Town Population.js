function solve(arr) {
  let result = {};
  for (const el of arr) {
    let [town, population] = el.split(" <-> ");
    if (result.hasOwnProperty(town)) {
      result[town].population += Number(population);
    } else {
      result[town] = { population: Number(population) };
    }
  }
  for (const town in result) {
    console.log(`${town} : ${result[town].population}`);
  }
}
solve([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
