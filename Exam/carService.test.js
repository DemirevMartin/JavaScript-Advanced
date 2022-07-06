//mocha carService.test.js
const { expect } = require('chai');
const { carService } = require('./carService');

describe('Unit Tests', () => {

    // isItExpensive (issue) - A function that accepts one parameter: string.
    // o	If the value of the parameter issue is equal to "Engine" or "Transmission", 
    //          return: `The issue with the car is more severe and it will cost more money`
    // o	Otherwise, if the above conditions are not met, return the following message:
    //          `The overall price will be a bit cheaper`
    // o	There is no need for validation for the input, you will always be given a string.
    
    describe('Test isItExpensive', () => {
        it('Test type isItExpensive', () => {
            expect(typeof carService.isItExpensive).to.equal('function');
        });
        
        it('Test valid', () => {
            expect(carService.isItExpensive('Engine')).to.equal(`The issue with the car is more severe and it will cost more money`);
            expect(carService.isItExpensive('Transmission')).to.equal(`The issue with the car is more severe and it will cost more money`);
        });
        it('Test other valid', () => {
            expect(carService.isItExpensive('Sth')).to.equal(`The overall price will be a bit cheaper`);
            expect(carService.isItExpensive('5555')).to.equal(`The overall price will be a bit cheaper`);
        });
    });
    
    // discount (numberOfParts, totalPrice) - A function that accepts two parameters: number and number.
    // o	Percentage of discount based on the numberOfParts:
    // o	15% when numberOfParts is higher than 2 and smaller or equal to 7
    // o	30% when numberOfParts is higher than 7
    // o	You need to calculate and return the price you will save, depending on the discount.
    
    // o	If the numberOfParts is smaller or equal to 2, return: 
    //          "You cannot apply a discount"
    // o	Otherwise, calculate the discount and return the following message:
    //          `Discount applied! You saved ${result}$`
    // o	You need to validate the input, if the numberOfParts and totalPrice are not a number, throw an error: "Invalid input"
    
    describe('Test discount', () => {
        it('Test type discount', () => {
            expect(typeof carService.discount).to.equal('function');
        });
        
        it('Test1 error', () => {
            expect(() => carService.discount('sth', 'hi')).to.throw('Invalid input');
            expect(() => carService.discount('sth', 100)).to.throw('Invalid input');
            expect(() => carService.discount(12, 'hi')).to.throw('Invalid input');
        });
        it('Test2', () => {
            expect(carService.discount(2, 120)).to.equal('You cannot apply a discount');
            expect(carService.discount(1, 50)).to.equal('You cannot apply a discount');
        });
        it('Test3', () => {
            expect(carService.discount(3, 300)).to.equal(`Discount applied! You saved 45$`);
            expect(carService.discount(5, 600)).to.equal(`Discount applied! You saved 90$`);
            expect(carService.discount(7, 760)).to.equal(`Discount applied! You saved 114$`);
        });
        it('Test4', () => {
            expect(carService.discount(8, 300)).to.equal(`Discount applied! You saved 90$`);
            expect(carService.discount(10, 450)).to.equal(`Discount applied! You saved 135$`);
            expect(carService.discount(12, 780)).to.equal(`Discount applied! You saved 234$`);
        });
    });

    //  partsToBuy (partsCatalog, neededParts) - A function that accepts two arrays.
    // o	The partsCatalog array will store the parts and the price for them ([{ part: "blowoff valve", price: 145 }, 
    //          { part: "coil springs", price: 230 } ...])
    // o	The neededParts array will store the parts that you need to buy (["blowoff valve", "injectors" ...])
    // o	You must iterate through both the arrays and calculate the total price of the parts that are equal to the neededParts.
    // o	If partsCatalog is empty, return 0
    // o	Finally, return the total price of all parts needed.
    // o	There is a need for validation for the input, may not always be valid. In case of submitted invalid parameters, 
    //          throw an error "Invalid input" - If passed partsCatalog or neededParts parameters are not an arrays.

    describe('Test partsToBuy', () => {
        it('Test type ', () => {
            expect(typeof carService.partsToBuy).to.equal('function');
        });
        
        it('Test1 error', () => { //partsToBuy (partsCatalog, neededParts)
            expect(() => carService.partsToBuy('sth', 'hi')).to.throw('Invalid input');
            expect(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }], '100')).to.throw('Invalid input');
            expect(() => carService.partsToBuy(12, ["blowoff valve", "injectors"])).to.throw('Invalid input');
        });
        it('Test2', () => {
            expect(carService.partsToBuy([], ["blowoff valve", "injectors"])).to.equal(0);
            expect(carService.partsToBuy([], [])).to.equal(0);
        });
        it('Test2', () => {
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, 
                    { part: "coil springs", price: 230 }], 
                    ["blowoff valve", "injectors"])).to.equal(145);

            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, 
                    { part: "injectors", price: 230 }, 
                    { part: "blowoff valve", price: 160 }], 
                    ["blowoff valve", "injectors"])).to.equal(535);
        });
    });
});