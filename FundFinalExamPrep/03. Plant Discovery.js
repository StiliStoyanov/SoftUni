function solve(input) {
  let n = Number(input.shift());
  let plants = {};
  for (let i = 0; i < n; i++) {
    let [name, rarity] = input.shift().split("<->");
    if (plants.hasOwnProperty(name)) {
      plants[name].rarity = rarity;
    } else {
      plants[name] = {
        rarity: Number(rarity),
        ratings: [],
        // cound cause a bug if already exists
      };
    }
  }
  while (input[0] != "Exhibition") {
    let tokens = input.shift().split(": ");
    let command = tokens.shift();
    let [plantName, p1] = tokens.shift().split(" - ");

    if (command == "Rate") {
      if (plants.hasOwnProperty(plantName)) {
        plants[plantName].ratings.push(Number(p1));
      } else {
        console.log(`error`);
      }
    }
    if (command == "Update") {
      if (plants.hasOwnProperty(plantName)) {
        plants[plantName].rarity = Number(p1);
      } else {
        console.log(`error`);
      }
    }
    if (command == "Reset") {
      if (plants.hasOwnProperty(plantName)) {
        while (plants[plantName].ratings.length != 0) {
          plants[plantName].ratings.pop();
        }
      } else {
        console.log(`error`);
      }
    }
  }
  console.log(`Plants for the exhibition:`);
  for (const plant in plants) {
    sum = 0;
    if (plants[plant].ratings.length != 0) {
      for (const rating of plants[plant].ratings) {
        sum += rating;
      }
      console.log(
        `- ${plant}; Rarity: ${plants[plant].rarity}; Rating: ${(
          sum / plants[plant].ratings.length
        ).toFixed(2)}`
      );
    } else {
      console.log(`- ${plant}; Rarity: ${plants[plant].rarity}; Rating: 0.00`);
    }
  }
}
solve([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);
