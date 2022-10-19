class Deck {
    
    constructor(cards, ctx) {
        this.cards = cards;
        this.count = 0;
        //this.canvas = document.getElementById('canvas');
        //this.ctx = canvas.getContext('2d');
        this.ctx = ctx;
        this.x = 0;
        this.y = 0;
        this.w = 100;
        this.h = 150;
        this.color = 'blue';
        this.card1 = new Image();
        this.card2 = new Image();
        this.card3 = new Image();
        this.card4 = new Image();
        this.card5 = new Image();
        this.card6 = new Image();
        this.card7 = new Image();
        this.card8 = new Image();
    }

    drawCard1 (x, y) {

        // desenhar a carta 1
        this.card1.src = 'docs/assets/images/Card Images/Card 1.PNG';
        this.ctx.drawImage(this.card1, x, y, this.w, this.h);
 
        /* this.ctx.fillStyle = this.color;
        this.ctx.fillRect(x, y, this.w, this.h);
        this.ctx.fillText('Ola', x, y); */
        //this.ctx.font = 'bold 10px';
        //thix.ctx.strokeStyle = 'red';
    }

    drawCard2 (x, y) {

        // desenhar a carta 2
        this.card2.src = 'docs/assets/images/Card Images/Card 2.PNG';
        this.ctx.drawImage(this.card2, x, y, this.w, this.h);
    }

    drawCard3 (x, y) {

        // desenhar a carta 3
        this.card3.src = 'docs/assets/images/Card Images/Card 3.PNG';
        this.ctx.drawImage(this.card3, x, y, this.w, this.h);
    }

    drawCard4 (x, y) {

        // desenhar a carta 4
        this.card4.src = 'docs/assets/images/Card Images/Card 4.PNG';
        this.ctx.drawImage(this.card4, x, y, this.w, this.h);
    }

    drawCard5 (x, y) {

        // desenhar a carta 5
        this.card5.src = 'docs/assets/images/Card Images/Card 5.PNG';
        this.ctx.drawImage(this.card5, x, y, this.w, this.h);
    }

    drawCard6 (x, y) {

        // desenhar a carta 6
        this.card6.src = 'docs/assets/images/Card Images/Card 6.PNG';
        this.ctx.drawImage(this.card6, x, y, this.w, this.h);
    }

    drawCard7 (x, y) {

        // desenhar a carta 7
        this.card7.src = 'docs/assets/images/Card Images/Card 7.PNG';
        this.ctx.drawImage(this.card7, x, y, this.w, this.h);
    }

    drawCard8 (x, y) {

        // desenhar a carta 8
        this.card8.src = 'docs/assets/images/Card Images/Card 8.PNG';
        this.ctx.drawImage(this.card8, x, y, this.w, this.h);
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
