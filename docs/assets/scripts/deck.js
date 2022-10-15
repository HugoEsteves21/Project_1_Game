console.log(allCards)

class Deck {
    constructor() {
        let cards = [...allCards];
        this.cards = cards;
    }


    print() {
        console.log(this.cards);
    }
}

let deck = new Deck();

//console.log(deck);
//deck.print();