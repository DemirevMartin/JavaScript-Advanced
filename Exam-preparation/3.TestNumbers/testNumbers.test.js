//mocha testNumbers.test.js

const { expect } = require('chai');
const { testNumbers } = require('./testNumbers');

describe('Unit Test', () => {

    // •	sumNumber(num1, num2) - A function that accepts two parameters:
    // o	check if parameters are numbers
    // o	numbers can be positive and negative
    // o	if parameters aren't number, function return undefined
    // o	the function returns the sum of the given numbers, rounded to second number after decimal point
    
    describe('Test sumNumbers', () => {
        it('Test type sumNumbers', () => {
            expect(typeof testNumbers.sumNumbers).to.equal('function');
        });
        
        it('Test invalid', () => {
            expect(testNumbers.sumNumbers('3', 6)).to.be.undefined;
            expect(testNumbers.sumNumbers(3, '6')).to.be.undefined;
            expect(testNumbers.sumNumbers('3', '6')).to.be.undefined;
        });
        it('Test valid', () => {
            expect(testNumbers.sumNumbers(3, 6)).to.equal('9.00');
            expect(testNumbers.sumNumbers(3, -7)).to.equal('-4.00');
            expect(testNumbers.sumNumbers(-3, 10)).to.equal('7.00');
            expect(testNumbers.sumNumbers(-3, -10)).to.equal('-13.00');
            expect(testNumbers.sumNumbers(3.22222, 10.11111)).to.equal('13.33');
            expect(testNumbers.sumNumbers(-3.4444, 16.5555)).to.equal('13.11');
            expect(testNumbers.sumNumbers(-3.55555, -10.3333333)).to.equal('-13.89');
        });
    });

    // •	numberChecker(input) - A function that accepts a single parameter:
    // o	the function parses the input to number, and validates it
    // o	if the input is a number, the function checks if it is even. If so the function returns the string: "The number is even!"
    // o	otherwise the function returns: "The number is odd!"
    // o	If the input is not a number the function throws an error – "The input is not a number!" 
    
    describe('Test numberChecker', () => {
        it('Test type numberChecker', () => {
            expect(typeof testNumbers.numberChecker).to.equal('function');
        });
        
        it('Test1', () => {
            expect(() => testNumbers.numberChecker('hello')).to.throw('The input is not a number!');
        });
        it('Test2', () => {
            expect(testNumbers.numberChecker('4')).to.equal('The number is even!');
            expect(testNumbers.numberChecker(24)).to.equal('The number is even!');
        });
        it('Test3', () => {
            expect(testNumbers.numberChecker('15')).to.equal('The number is odd!');
            expect(testNumbers.numberChecker(11)).to.equal('The number is odd!');
        });
    });

    // •	averageSumArray(arr) - A function that accepts single parameter (array):
    // o	the function iterates through each element in the array, calculates the sum, and returns the average sum
    // o	The array will be always valid, there is no need to test the input arrays. 

    describe('Test averageSumArray', () => {
        it('Test type averageSumArray', () => {
            expect(typeof testNumbers.averageSumArray).to.equal('function');
        });
        
        it('Test1', () => {
            expect(testNumbers.averageSumArray([3, 4, 5])).to.equal(4);
            expect(testNumbers.averageSumArray([3])).to.equal(3);
        });
    });
        
});

//20m