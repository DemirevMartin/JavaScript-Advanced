function printDeckOfCards(cards) {
    let arr = [];
    for(const el of cards) {
        const face = el.slice(0, -1);
        const suit = el.slice(-1);

        try {
            const card = createCard(face, suit);
            arr.push(card);
        } catch(err) {
            arr = [`Invalid card: ${el}`];
        }
        
    }

    function createCard(face, suit) {
        const faces = ['2', '3', '4' , '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663'
        }
        if(!suits.hasOwnProperty(suit)) throw new Error(`Invalid suit: ${suit}`);
        if(!faces.includes(face)) throw new Error(`Invalid face: ${face}`);
    
        const card = {
            face,
            suit: suits[suit],
            toString() {
                return this.face + this.suit
            }
        }
        return card.toString();
    }
    console.log(arr.join(' '));
}
//console.log(printDeckOfCards(['AS', '10D', 'KH', '2C']));
printDeckOfCards(['5S', '3D', 'QD', '6X']);