//mocha 4.math\math.test.js
const { expect } = require('chai');
const { mathEnforcer } = require('./math');

describe('Unit Test', () => {
    describe('Test addFive', () => {
        it ('Type Test addFive', () => {
            expect(typeof mathEnforcer.addFive).to.equal('function');
        });

        it ('Test1 addFive', () => {
            expect(mathEnforcer.addFive('5')).to.be.undefined;
        });
        it ('Test2 addFive', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });
        it ('Test3 addFive', () => {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        });
        it ('Test4 addFive', () => {
            expect(mathEnforcer.addFive(13.6789067)).to.be.closeTo(18.6789067, 0.0000001);
        });
    });
    describe('Test subtractTen', () => {
        it ('Type Test subtractTen', () => {
            expect(typeof mathEnforcer.subtractTen).to.equal('function');
        });

        it ('Test5 subtractTen', () => {
            expect(mathEnforcer.subtractTen('22323')).to.be.undefined;
        });
        it ('Test6 subtractTen', () => {
            expect(mathEnforcer.subtractTen(20)).to.equal(10);
        });
        it ('Test7 subtractTen', () => {
            expect(mathEnforcer.subtractTen(-20)).to.equal(-30);
        });
        it ('Test8 subtractTen', () => {
            expect(mathEnforcer.subtractTen(11.2234)).to.be.closeTo(1.2234, 0.0001);
        });
    });
    describe('Test sum', () => {
        it ('Type Test sum', () => {
            expect(typeof mathEnforcer.sum).to.equal('function');
        });

        it ('Test9 sum', () => {
            expect(mathEnforcer.sum('22323', 15)).to.be.undefined;
        });
        it ('Test10 sum', () => {
            expect(mathEnforcer.sum(234, '22323')).to.be.undefined;
        });
        it ('Test11 sum', () => {
            expect(mathEnforcer.sum(20, 1495)).to.equal(1515);
        });
        it ('Test12 sum', () => {
            expect(mathEnforcer.sum(-20, -1535)).to.equal(-1555);
        });
        it ('Test13 sum', () => {
            expect(mathEnforcer.sum(1.2, 2.2)).to.be.closeTo(3.4, 0.1);
        });
    });
});