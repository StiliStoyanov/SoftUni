function solve(input) {
    let n = input.shift()
    let pattern = /([^]{1,})>([0-9]{3})\|([a-z]{3})\|([A-Z]{3})\|([^<>]{3})<\1/
    for (let i = 0; i < n; i++) {
        let line = input.shift()
        let match = pattern.exec(line)
        if (match != null) {
            let result = match[2] +match[3]+match[4]+match[5]
            console.log(`Password: ${result}`);
        }
        else {
            console.log('Try another password!');
        }
        
    }
}
solve((["3",
"##>00|no|NO|!!!?<###",
"##>123|yes|YES|!!!<##",
"$$<111|noo|NOPE|<<>$$"])

)