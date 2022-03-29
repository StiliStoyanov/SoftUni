function solve(input) {
    
    let n = Number(input.shift())
    let pieces = {}
    for (let i = 0; i < n; i++) {
        let tokens = input.shift().split('|')
        let pieceName = tokens[0]
        let composer = tokens[1]
        let key = tokens[2]
        pieces[pieceName] = {composer,key}
    }
    while (input[0] != 'Stop') {
        let [command, piece, p1,p2] = input.shift().split('|')
        if (command == 'Add') {
            if (pieces.hasOwnProperty(piece) == true) {
                console.log(`${piece} is already in the collection!`);
            }
            else{
                pieces[piece] = {composer: p1,key: p2}
                console.log(`${piece} by ${p1} in ${p2} added to the collection!`)
            }
        }
        if (command == 'Remove') {
            if (pieces.hasOwnProperty(piece) == true) {
                delete pieces[piece]
                console.log(`Successfully removed ${piece}!`);
            }
            else{
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
        if (command == 'ChangeKey') {
            if (pieces.hasOwnProperty(piece) == true) {
              pieces[piece].key = p1
                console.log(`Changed the key of ${piece} to ${p1}!`);
            }
            else{
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }
    for (const piece in pieces) {
       
        console.log(`${piece} -> Composer: ${pieces[piece].composer}, Key: ${pieces[piece].key}`);
    }
}
solve([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
