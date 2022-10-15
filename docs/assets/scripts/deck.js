const { allCards } = require('./cards.js')

class Deck {
    constructor(cards) {
        // É necessário copiar?
        //let cards = [...allCards];
        this.cards = cards;
        this.count = 0;
    }

    shuffleDeck() {
        fbgb
    }

    dealCard() {
        return this.cards.shift();
    }

    endOfDeck() {
        if (this.cards.length === 0) {
            console.log('No more cards available!')
        }
    }


    printDeck() {
        console.log(this.cards);
    }
}

let deck = new Deck(allCards);

//console.log(deck);
//console.log(deck.dealCard());
//console.log(deck.dealCard());
//console.log(deck.printDeck());
//console.log(deck)
