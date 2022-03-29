function solve(input) {
    let result = {}
    while (input[0]!='Sail') {
        let [city,population,gold] = input.shift().split('||')
        if (result.hasOwnProperty(city)) {
            result[city].population += Number(population)
            result[city].gold += Number(gold)
            
        }
        else{
            result[city] = {
                population: Number(population),
                gold: Number(gold)
            }
        }
    }
    while (input[0] != 'End') {
        let [command,town, p1,p2] = input.shift().split('=>')
        if (command == 'Plunder') {
            console.log(`${town} plundered! ${p2} gold stolen, ${p1} citizens killed.`); 
            result[town].population -= Number(p1)
            result[town].gold -= Number(p2)
            if (result[town].population <= 0 || result[town].gold <=0) {
                delete result[town]
                console.log(`${town} has been wiped off the map!`);
            }
        }
        else if(command=='Prosper'){
            if (Number(p1) <= 0) {
                console.log(`Gold added cannot be a negative number!`);
            }
            else {
                result[town].gold += Number(p1)
                console.log(`"${p1} gold added to the city treasury. ${town} now has ${result[town].gold} gold."`);
            }

        }
    }
    if (Object.keys(result).length === 0) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }
    else{
        console.log(`Ahoy, Captain! There are ${Object.keys(result).length} wealthy settlements to go to:`);
        for (const town in result) {
            console.log(`${town} -> Population: ${result[town].population} citizens, Gold: ${result[town].gold} kg`);
        }
    }

}
solve((["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])
)