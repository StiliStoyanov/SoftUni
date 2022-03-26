function solve(input) {
    
let text = input.shift()
while (input[0] != 'Done') {
    let [command,p1,p2] = input.shift().split(' ')
    if (command == 'TakeOdd') {
        let newResult = ''
        for (let i = 1; i < text.length; i+=2) {
           newResult += text[i]
            
        }
        text = newResult
        console.log(text);
    }
    else if (command == 'Cut'){
        let toReplace = ''
        toReplace = text.split('').splice(p1,p2).join('') 
       text = text.replace(toReplace, '')
       console.log(text);
    }
    else if(command == 'Substitute'){
        if (text.includes(p1)) {
            text = text.split(p1).join(p2)
            console.log(text);
        }
        else{
            console.log('Nothing to replace!');
        }
    }
}
console.log(`Your password is: ${text}`);

}
solve((["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"])
)
