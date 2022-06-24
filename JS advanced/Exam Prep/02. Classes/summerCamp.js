class SummerCamp{
    constructor(organizer, location){
        this.organizer = organizer
        this.location = location
        this.priceForTheCamp = {child: 150, student: 300, collegian: 500}
        this.listOfParticipants = []
    }

    registerParticipant (name, condition, money){
        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error("Unsuccessful registration at the camp.")
        }
        if (this.listOfParticipants.some(p => p.name == name)) {
            return `The ${name} is already registered at the camp.`;
          }
        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`
        }

        const participant = {
            name,
            condition,
            power: 100,
            wins: 0
        }
        this.listOfParticipants.push(participant)
        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name){
        let isFound = false
        let indexToRemove
        for (const participant of this.listOfParticipants) {
            if (participant.name == name) {
                 indexToRemove = this.listOfParticipants.indexOf(participant)
                isFound = true
            }
        }
        if (isFound) {
            this.listOfParticipants.splice(indexToRemove,1)
            return `The ${name} removed successfully.`
        }
        else {
            throw new Error( `The ${name} is not registered in the camp.`)
        }
    }
    timeToPlay(typeOfGame, participant1, participant2) {
        let p1 = this.listOfParticipants.find(p => p.name == participant1);
        if (!p1) {
            throw new Error(`Invalid entered name/s.`);
        }
        if (participant1 && participant2) {
            let p2 = this.listOfParticipants.find(p => p.name == participant2);
            if (!p2) {
                throw new Error(`Invalid entered name/s.`);
            }
            if (p1.condition != p2.condition) {
                throw new Error('Choose players with equal condition.');
            }
            if (typeOfGame == 'WaterBalloonFights') {
                if (p1.power > p2.power) {
                    p1.wins += 1;
                    return `The ${p1.name} is winner in the game ${typeOfGame}.`
                } 
                else if (p2.power > p1.power) {
                    p2.wins +=1;
                    return `The ${p2.name} is winner in the game ${typeOfGame}.`
    
                }
                else {
                    return `There is no winner.`;
                }
            }
        }
        else if (typeOfGame == 'Battleship') {
            p1.power += 20;
            return `The ${p1.name} successfully completed the game ${typeOfGame}.`
        }
        
    }

    toString() {
        let result = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`];
        this.listOfParticipants.sort((a, b) => b.wins - a.wins).forEach(p => result.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`));
        return result.join('\n');
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));


