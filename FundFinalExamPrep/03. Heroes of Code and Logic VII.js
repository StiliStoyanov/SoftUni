function solve(input) {
    
    let n = input.shift()
    let result = {}
    for (let i = 0; i < n; i++) {
        let [heroName, HP, MP] = input.shift().split(' ')
        result[heroName] = {HP: Number(HP),MP: Number(MP)}
    }
     while (input[0]!='End') {
         let[command, name, p1,p2] = input.shift().split(' - ')
         if (command == 'CastSpell') {
             if (result[name].MP >= Number(p1)) {
                result[name].MP-= Number(p1)
                console.log(`${name} has successfully cast ${p2} and now has ${result[name].MP} MP!`);
             }
             else{
                 console.log(`${name} does not have enough MP to cast ${p2}!`);
             }
         }
         else if(command=='TakeDamage'){
             result[name].HP -= Number(p1)
             if (result[name].HP<=0)  {
                 console.log(`${name} has been killed by ${p2}!"`);
                 delete result[name]
             }
             else{
                 console.log(`${name} was hit for ${p1} HP by ${p2} and now has ${result[name].HP} HP left!"`);
             }
         }
         else if (command == 'Recharge'){
            let recharged = Math.min(Number(p1), (200 - result[name].MP));
            result[name].MP += recharged
            console.log(`${name} recharged for ${recharged} MP!"`);
         }
         else if (command == 'Heal'){
            let healed = Math.min(Number(p1), (100 - result[name].HP));
            result[name].HP += healed
            console.log(`${name} recharged for ${healed} MP!"`);
         }
     }
     for (const hero in result) {
         console.log(hero);
         console.log(`  HP: ${result[hero].HP}`);
         console.log(`  MP: ${result[hero].MP}`);


     }
}
solve(["2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"
    ])