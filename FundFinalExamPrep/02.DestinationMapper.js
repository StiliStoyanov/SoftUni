function solve(input) {
  let text = input;
  let pattern = /(=|\/)([A-Z][A-Za-z]{2,})\1/g;

  let match = pattern.exec(text);
  let matches = [];
  while (match != null) {
    let word = match[2];
    matches.push(word);

    match = pattern.exec(text);
  }
  console.log(`Destinations: ${matches.join(", ")}`);
  let travelPoints = 0;
  for (const word of matches) {
    travelPoints += word.length;
  }
  console.log(`Travel Points: ${travelPoints}`);
}
solve("ThisIs some InvalidInput");
