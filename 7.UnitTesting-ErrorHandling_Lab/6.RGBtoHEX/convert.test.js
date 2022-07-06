const { expect } = require('chai');
const { rgbToHexColor } = require('./convert');

describe('Test convertor', () => {
    it('Test1', () => {
        expect(rgbToHexColor(255,0,0)).to.be.equal('#FF0000');
    });
    it('Test2', () => {
        expect(rgbToHexColor(255,127,80)).to.be.equal('#FF7F50');
    });
    it('Test3', () => {
        expect(rgbToHexColor(255,0, '0')).to.be.equal(undefined);
    });
    it('Test4', () => {
        expect(rgbToHexColor(255, 0)).to.be.equal(undefined);
    });
    it('Test5', () => {
        expect(rgbToHexColor(258, 0, 0)).to.be.equal(undefined);
    });
    it('Test6', () => {
        expect(rgbToHexColor(253, -1, 0)).to.be.equal(undefined);
    });
});

// mocha 6.RGBtoHEX\convert.test.js