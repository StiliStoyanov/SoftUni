function solve(input) {
    let guests = {}
    let dislikedCound = 0
    while (input[0] != 'Stop') {
        let [command, p1,p2] = input.shift().split('-')
        if (command == 'Like') {
            let hasMeal = false
            if (guests.hasOwnProperty(p1)) {
                for (let meal of guests[p1].meals) {
                    if (meal == p2) {
                        hasMeal = true
                        break;
                    }
                }
                if (hasMeal == false) {
                    
                    guests[p1].meals.push(p2)
                }
            }
            else{
                guests[p1] = {meals: []}    
                guests[p1].meals.push(p2)

            }
        }
        else if (command == 'Dislike'){
        if (guests.hasOwnProperty(p1)==false) {
            console.log(`${p1} is not at the party.`);
        }
        else{
            let found = false 
            for (let meal of guests[p1].meals) {
                if (meal == p2) {
                    console.log(`${p1} doesn't like the ${p2}.`);
                    dislikedCound ++
                    found = true
                    let index = guests[p1].meals.indexOf(meal)
                    guests[p1].meals.splice(index,1)
                    break;
                }
            }
            if (found == false ) {
                console.log(`${p1} doesn't have the ${p2} in his/her collection.`);
            }
        }
        }
    }
    if (Object.keys(guests).length != 0) {
        for (const guest in guests) {
            console.log(`${guest}: ${guests[guest].meals.join(', ')}`);
         }
    }
    console.log(`Unliked meals: ${dislikedCound}`);
}  
solve((["Like-Krisi-shrimps",
"Like-Krisi-soup",
"Like-Penelope-dessert",
"Like-Misho-salad",
"Stop"])


)