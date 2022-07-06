//mocha bookSelection.test.js
const { expect } = require('chai');
const { bookSelection } = require('./bookSelection');

//  isGenreSuitable()
//  isItAffordable()
//  suitableTitles()

describe('Unit Test', () => {
    describe('Test isGenreSuitable', () => {
        it('Test type isGenreSuitable', () => {
            expect(typeof bookSelection.isGenreSuitable).to.equal('function');
        });
        
        it('Test1', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
        });
        it('Test2', () => {
            expect(bookSelection.isGenreSuitable('Horror', 9)).to.equal(`Books with Horror genre are not suitable for kids at 9 age`);
        });
        it('Test3', () => {
            expect(bookSelection.isGenreSuitable('Horror', 15)).to.equal(`Those books are suitable`);
        });
        it('Test4', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 34)).to.equal(`Those books are suitable`);
        });
    });

    describe('Test isItAffordable', () => {
        it('Test type isItAffordable', () => {
            expect(typeof bookSelection.isItAffordable).to.equal('function')
        });

        it('Test1', () => {
            expect(bookSelection.isItAffordable(12, 15)).to.equal(`Book bought. You have 3$ left`);
        });
        it('Test2', () => {
            expect(bookSelection.isItAffordable(20, 20)).to.equal(`Book bought. You have 0$ left`);
        });
        it('Test3', () => {
            expect(bookSelection.isItAffordable(20, 15)).to.equal(`You don't have enough money`);
        });
        it('Test4', () => {
            expect(() => (bookSelection.isItAffordable(20, '15'))).to.throw('Invalid input');
        });
        it('Test5', () => {
            expect(() => (bookSelection.isItAffordable('26', 15))).to.throw('Invalid input');
        });
    });

    describe('Test suitableTitles', () => {
        it('Test type suitableTitles', () => {
            expect(typeof bookSelection.suitableTitles).to.equal('function')
        });

        it('Test1', () => {
            expect(bookSelection.suitableTitles([{ title: 'Adv', genre: 'sci-fi' }, 
                {title: 'Hello', genre: 'hello'}, 
                {title: 'Help', genre: 'sci-fi'}], 'sci-fi')).to.deep.equal(['Adv', 'Help']);
            expect(bookSelection.suitableTitles([{ title: 'Adv', genre: 'sci-fi' }, 
                {title: 'Hello', genre: 'hello'}, 
                {title: 'Help', genre: 'sci-fi'}], 'novel')).to.deep.equal([]);
        });

        //   -------------!!!IMPORTANT!!!---------------
        it('Tests invalid input', () => {
            expect(() => bookSelection.suitableTitles({ title: 'Adv' }, 'sci-fi')).to.throw('Invalid input');
            expect(() => bookSelection.suitableTitles('hello', 54)).to.throw('Invalid input');
            expect(() => bookSelection.suitableTitles([{ title: 'Adv', genre: 'sci-fi' }], 23)).to.throw('Invalid input');
        });
    });
});