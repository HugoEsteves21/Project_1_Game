class Deck {
    
    constructor(cards, ctx) {
        // É necessário copiar?
        //let cards = [...allCards];
        this.cards = cards;
        this.count = 0;
        //this.canvas = document.getElementById('canvas');
        //this.ctx = canvas.getContext('2d');
        this.ctx = ctx;
        this.x = 0;
        this.y = 0;
        this.w = 80;
        this.h = 150;
        this.color = 'blue';
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
        
        // pode ser necessário fazer mais que uma vez consoante o nº de cartas que jogar
        if (this.cards.length !== 0) {
            let cardDealed = this.cards.shift();
            //console.log(cardDealed)
            return cardDealed;
            
        } 
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

//let deck = new Deck(allCards);

//console.log(deck);
//console.log(deck.dealCard());
//console.log(deck.dealCard());
//console.log(deck.shuffleDeck());
//console.log(deck)
