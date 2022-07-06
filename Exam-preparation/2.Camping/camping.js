class SummerCamp {
    constructor (organizer, location, priceForTheCamp, listOfParticipants) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants = [];
    }

    registerParticipant (name, condition, money) {
        const conditions = Object.keys(this.priceForTheCamp);
        if(!conditions.includes(condition)) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        let isFound = false;
        for(const el of this.listOfParticipants) {
            if(el['name'] === name) {
                isFound = true;
                break;
            }
        }
        if(isFound) {
            return `The ${name} is already registered at the camp.`;
        }

        const price = this.priceForTheCamp[condition];
        if(money < price) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        let participant = {
            name, 
            condition,
            power: 100,
            wins: 0
        }
        this.listOfParticipants.push(participant);
        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant (name) {
        let isFound = false;
        let index = 0;
        for(let i = 0; i < this.listOfParticipants.length; i++) {
            const el = this.listOfParticipants[i];
            if(el['name'] === name) {
                isFound = true;
                index = i;
                break;
            }
        }
        if(!isFound) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        this.listOfParticipants.splice(index, 1);
        return `The ${name} removed successfully.`;
    }

    timeToPlay (typeOfGame, participant1, participant2) {
        let isFoundOne = false;
        let isFoundTwo = true;
        if(participant2 !== undefined) isFoundTwo = false;
        let conditionOne = '';
        let conditionTwo = '';
        
        for(let el of this.listOfParticipants) {
            if(el['name'] === participant1) {
                isFoundOne = true;
                conditionOne = el['condition'];
            } else if(!isFoundTwo && el['name'] === participant2) {
                isFoundTwo = true;
                conditionTwo = el['condition'];
            }
            if(isFoundOne && isFoundTwo) break;
        }

        if(!isFoundOne || !isFoundTwo) {
            throw new Error(`Invalid entered name/s.`);
        }
        if(conditionOne !== conditionTwo && conditionTwo !== '') {
            throw new Error('Choose players with equal condition.');
        }

        let powerOne = 0;
        let powerTwo = 0;
        
        for(let el of this.listOfParticipants) {
            let stopOne = false;
            let stopTwo = false;
            
            if(el['name'] === participant1) {
                if(typeOfGame === 'WaterBalloonFights') powerOne = el['power'];
                else if(typeOfGame === 'Battleship'){ 
                    el['power'] += 20;
                    return `The ${participant1} successfully completed the game ${typeOfGame}.`;
                }
                stopOne = true;
            } else if(el['name'] === participant2 && typeOfGame === 'WaterBalloonFights') {
                powerTwo = el['power'];
                stopTwo = true;
            }
            if(stopOne && stopTwo) break;
        }

        let winner = 0;
        if(powerOne > powerTwo) {
            for(let el of this.listOfParticipants) {
                if(el['name'] === participant1) {
                    el['wins']++;
                }
            }
            return `The ${participant1} is winner in the game ${typeOfGame}.`;
        } else if(powerTwo > powerOne) {
            for(let el of this.listOfParticipants) {
                if(el['name'] === participant2) {
                    el['wins']++;
                }
            }
            return `The ${participant2} is winner in the game ${typeOfGame}.`;
        } else {
            return `There is no winner.`;
        }
    }

    toString () {
        let report = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`;
        this.listOfParticipants.sort((x, y) => y.wins - x.wins);
        for(const el of this.listOfParticipants) {
            report += `\n${el['name']} - ${el['condition']} - ${el['power']} - ${el['wins']}`;
        }
        return report;
    }
}
// Input 1 -y
// Input 2 -y
// Input 3 -y
// Input 4 -y

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
//console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());