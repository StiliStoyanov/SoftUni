function solve(input) {
  let resultArray = [];

  let row = input.shift().slice(2);
  row = row.slice(0, row.length - 2);
  let [row1, row2, row3] = row.split(" | ");

  for (const token of input) {
    let item = token.slice(2);
    item = item.slice(0, item.length - 2);
    let [name, lat, long] = item.split(" | ");

    let obj = {
      [row1]: name,
      [row2]: Number(Number(lat).toFixed(2)),
      [row3]: Number(Number(long).toFixed(2)),
    };

    resultArray.push(obj);
  }
  console.log(JSON.stringify(resultArray));
}
solve([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
