class SmartHike {
    constructor (username, goals, listOfHikes, resources) {
        this.username = '';
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal (peak, altitude) {
        // This method adds a new goal to the goals object. The method accepts 2 arguments:
        // •	peak – a string
        // •	altitude – a number
        if(this.goals.hasOwnProperty(peak)) {
            return `${peak} has already been added to your goals`;
        }
        this.goals[peak] = altitude;
        return `You have successfully added a new goal - ${peak}`;
    }

    hike (peak, time, difficultyLevel) {
        if(!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`);
        }

        if(this.resources === 0) {
            throw new Error(`You don't have enough resources to start the hike`);
        }

        let diff = this.resources - time * 10;
        if(diff < 0) {
            return "You don't have enough resources to complete the hike";
        }

        this.resources -= time * 10;
        this.listOfHikes.push({ peak, time, difficultyLevel });
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
    }

    rest (time) {
        let add = this.resources + time * 10;
        if(add >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        } 

        this.resources += time * 10;
        return `You have rested for ${time} hours and gained ${time * 10}% resources`;
    }

    showRecord (criteria) {
        //  hard / easy / all
        if(this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`;
        }

        if(criteria !== 'all') {
            let index = -1;
            let best = -1;
            let noHikes = true; 
            for(let el of this.listOfHikes) {
                if(el['difficultyLevel'] === criteria) {
                    best = el['time'];
                    index = this.listOfHikes.indexOf(el);
                    noHikes = false;
                    break;
                }
            }
    
            if(noHikes) return `${this.username} has not done any ${criteria} hiking yet`;
    
            for(let i = index; i < this.listOfHikes.length; i++) {
                let el = this.listOfHikes[i];
                if(el['difficultyLevel'] === criteria && el['time'] < best) {
                    best = el['time'];
                    index = i;
                }
            }
            let pbPeak = this.listOfHikes[index]['peak'];
            return `${this.username}'s best ${criteria} hike is ${pbPeak} peak, for ${best} hours`;
        } else {
            let report = "All hiking records:"; 
            for(let el of this.listOfHikes) {
                report += `\n${this.username} hiked ${el.peak} for ${el.time} hours`;
            }
            return report;
        }
    }
}
// Input 1 -y
// Input 2 -y
// Input 3 -y
// Input 4 -y
// Input 5 -

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));
