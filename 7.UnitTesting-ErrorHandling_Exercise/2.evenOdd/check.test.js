const { expect } = require('chai');
const { isOddOrEven } = require('./check');

describe('Test Checker', () => {
    it('Test1', () => {
        expect(isOddOrEven('hillowhillow')).to.equal('even');
    });
    it('Test1', () => {
        expect(isOddOrEven('henlo')).to.equal('odd');
    });
    it('Test1', () => {
        expect(isOddOrEven(514)).to.be.undefined;
    });
});


//mocha 2.evenOdd\check.test.js