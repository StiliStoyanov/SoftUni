class SmartHike{
    constructor(username){
        this.username = username
        this.goals = {}
        this.listOfHikes = []
        this.resources = 100
    }

    addGoal(peak,altitude){
        if (this.goals.hasOwnProperty(peak)) {
            return `${peak} has already been added to your goals`
        }
        else{
            this.goals[peak] = altitude
            return `You have successfully added a new goal - ${peak}`
        }
    }
    hike(peak, time, difficultyLevel){
        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error( `${peak} is not in your current goals`)
        }
        if (this.goals[peak] == 0) {
            throw new Error("You don't have enough resources to start the hike")
        }
        if (this.resources - (time*10) < 0) {
            return "You don't have enough resources to complete the hike"
        }
        let result = time * 10
        this.resources -= result

        const hike = {
            peak,
            time,
            difficultyLevel
        }
        this.listOfHikes.push(hike)
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
    }
    rest(time){
        let resultTime = time*10
        this.resources += resultTime

        if (this.resources >= 100) {
            this.resources = 100
            return `Your resources are fully recharged. Time for hiking!`
        }
        return `You have rested for ${time} hours and gained ${resultTime}% resources`
    }
    showRecord(criteria){
        if (this.listOfHikes.length == 0) {
           return `${this.username} has not done any hiking yet`
        }

        if (criteria == 'hard') {
          let newArray = []
          for (const obj of this.listOfHikes) {
            if (obj.difficultyLevel == 'hard') {
                newArray.push(obj)
            }
          }
           if (newArray.length == 0) {
            return `${this.username} has not done any ${criteria} hiking yet`
           }
           else{
          newArray.sort((a,b)=> a.time - b.time)

           return `${this.username}'s best ${criteria} hike is ${newArray[0].peak} peak, for ${newArray[0].time} hours`
           }

        }
        if (criteria == 'easy') {
            let newArray = []
            for (const obj of this.listOfHikes) {
              if (obj.difficultyLevel == 'easy') {
                  newArray.push(obj)
              }
            }
             if (newArray.length == 0) {
              return `${this.username} has not done any ${criteria} hiking yet`
             }
             else{
            newArray.sort((a,b)=> a.time - b.time)
  
             return `${this.username}'s best ${criteria} hike is ${newArray[0].peak} peak, for ${newArray[0].time} hours`
             }
         
        }
        if (criteria == 'all') {
            let finalResultArray = ["All hiking records:"]

            for (const hike of this.listOfHikes) {
                finalResultArray.push(`${this.username} hiked ${hike.peak} for ${hike.time} hours`)
            }
            return finalResultArray.join('\n')
        }
    }
}

const user = new SmartHike('Vili');
console.log(user.addGoal('Musala', 2925));
console.log(user.addGoal('Rui', 1706));
console.log(user.hike('Musala', 8, 'hard'));
console.log(user.hike('Rui', 3, 'easy'));
console.log(user.hike('Everest', 12, 'hard'));













