function solve(input) {
  let text = input[0];

  let pattern =
    /(#|\|)([A-Za-z ]{1,})\1([0-9]{2}\/[0-9]{2}\/[0-9]{2})\1([0-9]{1,5})\1/g;

  let match = pattern.exec(text);
  let matches = [];
  let totalCalories = 0;
  while (match != null) {
    let item = match[2];
    let expirationDate = match[3];
    let calories = Number(match[4]);
    matches.push(
      `Item: ${item}, Best before: ${expirationDate}, Nutrition: ${calories}`
    );
    totalCalories += calories;
    match = pattern.exec(text);
  }

  console.log(  `You have food to last you for: ${Math.floor(totalCalories / 2000)} days!` );
  console.log(matches.join("\n"));
}
solve(["Hello|#Invalid food#19/03/20#450|$5*(@"]);
solve(["$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",]);
