function solve(input) {
  let text = input.shift();
  while (input[0] != "Travel") {
    let [command, p1, p2] = input.shift().split(":");
    if (command == "Add Stop") {
        p1 = Number(p1)
        if (p1 > 0 && p1 < text.length) {
            let left = text.substring(0,p1)
            let right = text.substring(p1)
            text = left + p2 + right
            console.log(text);
        }
        else{
            console.log(text);
        }
    } else if (command == "Remove Stop") {
        p1 = Number(p1)
        p2 = Number(p2)
        if ((p1 > 0 && p1 < text.length) || p2 >0 && p2 < text.length) {
            let left = text.substring(0,p1)
            let right = text.substring(p2+1)
            text = left + right
            console.log(text);
        }
        else{
            console.log(text);
        }
    }
    else if (command == 'Switch'){
        if (text.includes(p1)) {
            text = text.split(p1).join(p2);
            console.log(text);
          }
          else{
            console.log(text);
        }

    }
  }
  console.log(`Ready for world tour! Planned stops: ${text}`);
}
solve((["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"])

);
