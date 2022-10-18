class Player extends Enemy {
    
    constructor(deck, board) {
        super(deck, board);
    }

    playCards() {
        
        // validar se playerHand() esta vazio?
        if (this.playerHand.length !== 0) {
            
            // escolher carta random da mão do jogador
            let randomCard = Math.floor((Math.random() * this.playerHand.length));
            let cardToPlay = this.playerHand[randomCard]
            console.log(this.playerHand[randomCard]);
            console.log(this.playerHand);
            console.log(cardToPlay);

            // por a carta que quero jogar no array play
            this.play.push(this.playerHand[randomCard]);
            console.log(this.play);

            // adicionar a carta ao array do board
            this.board.cardsOnBoard(this.play);
            console.log(this.board.board);
            
            // dependendo do valor da carta, desenhar no sitio correto
            // falta decidir a posição para cada número!
            switch (this.playerHand[randomCard].valor) {
                case 1:
                    this.deck.drawCard(10, 10);
                    break;
                case 2:
                    this.deck.drawCard(60, 60);
                    break;
                case 3:
                    this.deck.drawCard(120, 120);
                    break;
                case 4:
                    this.deck.drawCard(180, 180);
                    break;
                case 5:
                    this.deck.drawCard(230, 230);
                    break;
                case 6:
                    this.deck.drawCard(300, 300);
                    break;
                case 7:
                    this.deck.drawCard(350, 350);
                    break;
                case 8:
                    this.deck.drawCard(400, 400);
            }
            
            // retirar carta da mão do jogador
            this.playerHand.splice(randomCard, 1);
            for (let i = 0; i < this.play.length; i++) {
                this.play.splice(i, 1);
            }

            //método para ir buscar carta ao deck
            this.playerHand.push(this.deck.dealCard());
        }
    }
}