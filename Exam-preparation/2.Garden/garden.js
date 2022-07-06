class Garden {
    constructor (spaceAvailable, plants, storage) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant (plantName, spaceRequired) {
        if(spaceRequired > this.spaceAvailable) {
            throw new Error('Not enough space in the garden.');
        }
        this.plants.push({
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        });

        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant (plantName, quantity) {
        let isFound = false;
        let isRipe = false;
        for(const el of this.plants) {
            if(el['plantName'] === plantName) {
                isFound = true;
                if(el['ripe']) isRipe = true;
                break;
            }
        }

        if(!isFound) throw new Error(`There is no ${plantName} in the garden.`);
        if(isRipe) throw new Error(`The ${plantName} is already ripe.`);
        if(quantity <= 0) throw new Error(`The quantity cannot be zero or negative.`);

        for(let el of this.plants) {
            if(el['plantName'] === plantName) {
                el['ripe'] = true;
                el['quantity'] += quantity;
                if(quantity === 1) { 
                    return `${quantity} ${plantName} has successfully ripened.`
                } else {
                    return `${quantity} ${plantName}s have successfully ripened.`
                }
            }
        }
    }

    harvestPlant(plantName) {
        let isFound = false;
        let isRipe = false;
        for(let i = 0; i < this.plants.length; i++) {
            const el = this.plants[i];
            if(el['plantName'] === plantName) {
                isFound = true;
                isRipe = el['ripe'];
                if(isRipe) {
                    this.spaceAvailable += el['spaceRequired'];
                    this.plants.splice(i, 1);
                    this.storage.push(el);
                }
                break;
            }
        }

        if(!isFound) throw new Error(`There is no ${plantName} in the garden.`);
        if(!isRipe) throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);

        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
        let report = `The garden has ${this.spaceAvailable} free space left.\n`;
        
        report += `Plants in the garden: `;
        let keysGarden = [];
        for(const el of this.plants) {
            keysGarden.push(el['plantName']);
        }
        report += keysGarden.sort((x, y) => x.localeCompare(y)).join(', ');

        let keysStorage = [];
        for(const el of this.storage) {
            keysStorage.push(`${el['plantName']} (${el['quantity']})`);
        }
        if(keysStorage.length === 0) report += `\nPlants in storage: The storage is empty.`
        else report += `\nPlants in storage: ` + keysStorage.join(', ');

        return report;
    }
}
// Input 1 -y
// Input 2 -y
// Input 3 -y
// Input 4 -y
// Input 5 -y
// Input 6 -y

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());