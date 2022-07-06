const { sum } = require('./myModule.js');
const { expect } = require('chai');

describe('Test Suite', () => {
    it('works with positive integers', () => {
        expect(sum(3, 5).to.equal(8, 'incorrect answer with 3 and 5'));
    });

    it('works with floating point numbers', () => {
        expect(sum(3.14, 2.71).to.equal(5.85));
    });
})