//mocha library.test.js
const { expect } = require('chai');
const { library } = require('./library');

describe('Unit Test', () => {
    // •	calcPriceOfBook (nameOfBook, year) - A function that accepts a string and a number:
    //     o	The function calculates the price of the book depending on the year of publication
    //     o	The standard price of the book is 20 BGN
    //     o   If the year of publication is less than or equal to 1980, there is a 50% percent discount from the standard price
    //     o	The function calculated price of the book and return: `Price of {nameOfBook} is {price}`
    //     o	You need to validate the input, if nameOfBook is not a string, or the year is not an integer number, 
    //          throw an error: "Invalid input"

    describe('Test calcPriceOfBook', () => {
        it('Test type calcPriceOfBook', () => {
            expect(typeof library.calcPriceOfBook).to.equal('function');
        });
        
        it('Test1', () => {
            expect(library.calcPriceOfBook('All', 1979)).to.equal(`Price of All is 10.00`);
            expect(library.calcPriceOfBook('No', 1980)).to.equal(`Price of No is 10.00`);
            expect(library.calcPriceOfBook('Some', 1950)).to.equal(`Price of Some is 10.00`);
        });
        it('Test2', () => {
            expect(library.calcPriceOfBook('All', 2015)).to.equal(`Price of All is 20.00`);
            expect(library.calcPriceOfBook('No', 2000)).to.equal(`Price of No is 20.00`);
            expect(library.calcPriceOfBook('Some', 1981)).to.equal(`Price of Some is 20.00`);
        });
        it('Test3', () => {
            expect(() => library.calcPriceOfBook(15, 1979)).to.throw(`Invalid input`);
            expect(() => library.calcPriceOfBook('No', '1980')).to.throw(`Invalid input`);
            expect(() => library.calcPriceOfBook(134, 'hello')).to.throw(`Invalid input`);
        });
    });

    // •	findBook (booksArr, desiredBook)- A function that accepts an array and string:
    // o	The array includes all available books in the library (["Troy", "Life Style", "Toronto", etc.])
    // o	If the length of the booksArr array is zero, throw an error in the following format: "No books currently available"
    // o	The function checks whether the submitted string desiredBook is present in the array booksArr.
    // o	If present in the array, the function return: "We found the book you want."
    // o	Otherwise the function return: "The book you are looking for is not here!"
    // o	There is no need for validation for the input, you will always be given an array and string
    
    describe('Test findBook ', () => {
        it('Test type findBook ', () => {
            expect(typeof library.findBook).to.equal('function');
        });
        
        it('Test1', () => {
            expect(() => library.findBook([], 'sth')).to.throw('No books currently available');
        });
        it('Test2', () => {
            expect(library.findBook(['sth', 'nth'], 'sth')).to.equal('We found the book you want.');
            expect(library.findBook(['sth', 'nth', 'hello', 'bye', 'Poseidon'], 'Poseidon')).to.equal('We found the book you want.');
        });
        it('Test3', () => {
            expect(library.findBook(['sth', 'nth'], 'ath')).to.equal('The book you are looking for is not here!');
            expect(library.findBook(['sth', 'nth', 'hello', 'pose'], 'Poseidon')).to.equal('The book you are looking for is not here!');
        });
    });

    // •	arrangeTheBooks (countBooks) - A function accept a number:
    // o	You need to validate the input, if the countBooks is not an integer number, or is a negative number, throw an error: "Invalid input"
    // o	The library has 5 shelves, each shelf can hold 8 books. Distribute the books on the shelves
    // o	If all the books are arranged on the shelves, return: "Great job, the books are arranged."
    // o	Otherwise, if no space has been reached, return: "Insufficient space, more shelves need to be purchased."
    
    describe('Test arrangeTheBooks', () => {
        it('Test type arrangeTheBooks', () => {
            expect(typeof library.arrangeTheBooks).to.equal('function');
        });
        
        it('Test1', () => {
            expect(() => library.arrangeTheBooks(3.14)).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(-5)).to.throw('Invalid input');
        });
        it('Test2', () => {
            expect(library.arrangeTheBooks(3)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(15)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        });
        it('Test3', () => {
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
            expect(library.arrangeTheBooks(45)).to.equal('Insufficient space, more shelves need to be purchased.');
            expect(library.arrangeTheBooks(1515)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
    });
});