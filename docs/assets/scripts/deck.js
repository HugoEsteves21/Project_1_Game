const { allCards } = require('./cards.js')

class Deck {
    
    constructor(cards) {
        // É necessário copiar?
        //let cards = [...allCards];
        this.cards = cards;
        this.count = 0;
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.x = x;
        this.y = y;
        this.w = 20;
        this.h = 60;
        this.color = 'white';
    }

    drawCard(x, y) {
        // desenhar a carta
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(x, y, this.w, this.h);
    }

    shuffleDeck() {
        
        // só é preciso fazer shuffle uma vez no inicio do jogo
        for (let i = 0; i < this.cards.length; i++) {
            
            let location1 = Math.floor((Math.random() * this.cards.length));
            let location2 = Math.floor((Math.random() * this.cards.length));
            let temporary = this.cards[location1];
    
            this.cards[location1] = this.cards[location2];
            this.cards[location2] = temporary;
        }
        return this.cards;
    }

    dealCard() {
        
        // fazer sempre depois de jogar
        // pode ser necessário fazer mais que uma vez consoante o nº de cartas que jogar
        // validar antes se ainda existem cartas no baralho?
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

//module.exports = { Deck };

//let deck = new Deck(allCards);

//console.log(deck);
//console.log(deck.dealCard());
//console.log(deck.dealCard());
//console.log(deck.shuffleDeck());
//console.log(deck)
