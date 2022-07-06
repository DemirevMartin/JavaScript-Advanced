//mocha 3.char\char.test.js
const { expect } = require('chai');
const { lookupChar } = require('./char');

describe('Unit Tests', () => {
    describe('Test ', () => {
        it('Test type ', () => {
            expect(typeof testNumbers.sumNumbers).to.equal('function');
        });
        
        it('Test', () => {
            expect(testNumbers.sumNumbers('3', 6)).to.be.undefined;
        });
        it('Test', () => {
            expect(testNumbers.sumNumbers(3, 6)).to.equal('9.00');
        });
    });
    
    describe('Test ', () => {
        it('Test type ', () => {
            expect(typeof testNumbers.numberChecker).to.equal('function');
        });
        
        it('Test1', () => {
            expect(() => testNumbers.numberChecker('hello')).to.throw('The input is not a number!');
        });
        it('Test2', () => {
            expect(testNumbers.numberChecker('4')).to.equal('The number is even!');
        });
        it('Test3', () => {
            expect(testNumbers.numberChecker('15')).to.equal('The number is odd!');
        });
    });

    describe('Test ', () => {
        it('Test type ', () => {
            expect(typeof testNumbers.averageSumArray).to.equal('function');
        });
        
        it('Test1', () => {
            expect(testNumbers.averageSumArray([3, 4, 5])).to.equal(4);
        });
    });
});