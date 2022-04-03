function solve(input) {
    let text = input.shift()
    while (input[0] != 'End') {
        let[command,p1,p2] = input.shift().split(' ')
        if (command == 'Translate') {
            text = text.split(p1).join(p2);
            console.log(text);
        }
        else if(command =='Includes')
        {
            if (text.includes(p1)) {
                console.log(`True`);
            }
            else{
                console.log('False');
            }
        }
        else if (command == 'Start'){
            if (text.startsWith(p1)) {
                console.log('True');
            }
            else{
                console.log('False');
            }
        }
        else if(command == 'Lowercase'){
            text = text.toLowerCase()
            console.log(text);
        }
        else if (command == 'FindIndex'){
            console.log(text.lastIndexOf(p1));
        }
        else if (command == 'Remove'){
           
            let left = text.slice(0,Number(p1))
            let right = text.slice(Number(p1)+ Number(p2))
            text = left+right
            console.log(text);
        }
        
    }
}
solve((["*S0ftUni is the B3St Plac3**",
"Translate 2 o",
"Includes best",
"Start the",
"Lowercase",
"FindIndex p",
"Remove 2 7",
"End"])

)