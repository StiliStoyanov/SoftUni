function solve(input) {
    let text = input[0]
    let coolThreshold = 1;
    let emojis = []

    let pattern1 = /([0-9])/g
    let match1 = pattern1.exec(text)
    while (match1!= null) {
    coolThreshold *= Number(match1[1])
    match1 = pattern1.exec(text)
    }
    
    let pattern = /(\*\*|::)([A-Z][a-z]{2,})\1/g
    let match = pattern.exec(text)
    while (match != null) {
        emojis.push(match[0])
        match = pattern.exec(text)

    }
    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${emojis.length} emojis found in the text. The cool ones are:`);
    for (let emoji of emojis) {
        let emojiCoolness = 0;
   let newEmoji = emoji.substring(2,emoji.length-2)
   for (let i = 0; i < newEmoji.length; i++) {
       emojiCoolness += newEmoji[i].charCodeAt(0)
       
   }
   if (emojiCoolness >= coolThreshold) {
       console.log(emoji);
   }
    }

}
solve(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])