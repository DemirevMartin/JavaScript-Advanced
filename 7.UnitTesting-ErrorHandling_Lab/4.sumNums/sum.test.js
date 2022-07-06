const { expect } = require('chai');
const { sum } = require('./sum');

describe('Test Sum of Numbers', () => {
    it('Passes', () => {
        expect(sum([5, 134, 508])).to.be.equal(647);
    });

    it('Passes', () => {
        expect(sum([4321, 4321, 4321])).to.be.equal(12963);
    });

    it('Passes', () => {
        expect(sum([5, 5, 5])).to.be.equal(15);
    });

    it('Passes', () => {
        expect(sum([15, 15, 15])).to.be.equal(45);
    });
});

//mocha 4.sumNums\sum.test.js