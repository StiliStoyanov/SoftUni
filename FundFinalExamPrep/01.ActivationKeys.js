function solve(input) {
    let key = input.shift()
    while (input[0]!= 'Generate') {
        
        let[command,p1,p2,p3] = input.shift().split('>>>')
        if (command == 'Contains') {
            if (key.includes(p1)) {
                console.log(`"${key} contains ${p1}`);
            }
            else{
                console.log('Substring not found!');
            }
        }
        if (command == 'Flip') {
           
            if (p1 == 'Upper') {
                let toReplace = key.slice(Number(p2),Number(p3)).toUpperCase()
                let left = key.slice(0,Number(p2))
                let right = key.slice(Number(p3))
                 key = left + toReplace + right

            }
            else if(p1 == 'Lower'){
                let toReplace = key.slice(Number(p2),Number(p3)).toLowerCase()
                let left = key.slice(0,Number(p2))
                let right = key.slice(Number(p3))
             key = left + toReplace + right
        } 
        console.log(key);
    }
    if (command == 'Slice') {
        let left = key.slice(0,Number(p1))
        let right = key.slice(Number(p2))
       key = left+right
        console.log(key);
    }

}
console.log(`Your activation key is: ${key}`);
}
solve((["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"])
)
