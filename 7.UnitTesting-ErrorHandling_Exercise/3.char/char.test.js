//mocha 3.char\char.test.js
const { expect } = require('chai');
const { lookupChar } = require('./char');

describe('Unit Test', () => {
    it('Test1', () => {
        expect(lookupChar('hello', '404')).to.be.undefined;
    });
    it('Test2', () => {
        expect(lookupChar(5, 4)).to.be.undefined;
    });
    it('Test7', () => {
        expect(lookupChar('hello')).to.be.undefined;
    });
    it('Test8', () => {
        expect(lookupChar(15)).to.be.undefined;
    });
    it('Test9', () => {
        expect(lookupChar('hi', 0.4563627316)).to.be.undefined;
    });

    it('Test3', () => {
        expect(lookupChar('hello', 5)).to.equal('Incorrect index');
    });
    it('Test4', () => {
        expect(lookupChar('hello', -1)).to.equal('Incorrect index');
    });

    it('Test5', () => {
        expect(lookupChar('all', 1)).to.equal('l');
    });
    it('Test6', () => {
        expect(lookupChar('bought', 3)).to.equal('g');
    });
});