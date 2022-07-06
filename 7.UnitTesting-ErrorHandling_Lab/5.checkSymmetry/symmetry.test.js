const { expect } = require('chai');
const { isSymmetric } = require('./symmetry');

describe('Check symmetry', () => {
    it('works with number array with even length', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true; //
    });

    it('works with number array with odd length', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true; //
    });

    it('works with string array', () => {
        expect(isSymmetric(['a', 'z', 'z', 'a'])).to.be.true; //
    });

    it('does not work with unsymmetrical number array', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });

    it('does not work with non-array - num', () => {
        expect(isSymmetric(6)).to.be.false; //
    });

    it('does not work with non-array - str', () => {
        expect(isSymmetric('pop')).to.be.false; //
    });

    it('does not work with array of different types', () => {
        expect(isSymmetric(['1', 2, 1])).to.be.false;
    });
}); 

//mocha 5.checkSymmetry\symmetry.test.js