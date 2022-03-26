function solve(input) {
  let text = input.shift();

  while (input[0] != "Decode") {
    let [command,p1,p2] = input.shift().split("|");
    if (command == "Move") {
      p1 = Number(p1);
      let substr = text.substring(0, p1);
      let rest = text.slice(p1);
      text = rest + substr;
    } else if (command == "Insert") {
      p1 = Number(p1);
      let substr = text.substring(0, p1);
      let rest = text.slice(p1);
      text = substr + p2 + rest;
    } else if (command == "ChangeAll") {
      text = text.split(p1).join(p2);
    }
  }
  console.log(`The decrypted message is: ${text}`);
}
solve(["owyouh", "Move|2", "Move|3", "Insert|3|are", "Insert|9|?", "Decode"]);
