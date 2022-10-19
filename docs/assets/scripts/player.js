class Player extends Enemy {
    
    constructor(deck, board, enemy) {
        super(deck, board);
        this.enemy = enemy;
    }

    playCards(valor) {
        
        // validar se playerHand() esta vazio?
        if (this.playerHand.length !== 0) {
            let cardToPlay = this.playerHand.filter((card) => card.valor === valor)[0]
            if(cardToPlay){


           
            // escolher carta random da mão do jogador
        
            /* let cardToPlay = this.playerHand[Math.floor(Math.random() * this.playerHand.length)] */
           
            console.log("PLAYER Hand", this.playerHand);

            // por a carta que quero jogar no array play
            this.play.push(cardToPlay);
            console.log(this.play);

            // adicionar a carta ao array do board
            this.board.cardsOnBoard(this.play);
            console.log(this.board.board);

            // verificar se "comemos" alguma carta
            // this.board = [[1],[2],[3],[4],[5],[6],[7],[8]];
            for (let i = this.board.length - 1; i > 0; i--) {
                
                if (cardToPlay.valor === 1 && this.board[0].length >= 3 && this.board[7].length > 0) {
                    for (let p = 0; p < this.board[0].length; p++) {
                        this.playerDeck.push(this.board[7][p]);
                        this.board[7][p].shift();
                    }
                }
                
                if (cardToPlay.valor === (i + 1) && this.board[i].length >= 3) {
                    for (let j = 0; j < this.board[i].length; j++) {
                        
                        if (this.board[i - 1].length > 0) {
                            this.playerDeck.push(this.board[i - 1][j]);
                            this.board[i - 1][j].shift();
                        } else if (this.board[i - 2].length > 0) {
                            this.playerDeck.push(this.board[i - 2][j]);
                            this.board[i - 2][j].shift();
                        } else if (this.board[i - 3].length > 0) {
                            this.playerDeck.push(this.board[i - 3][j]);
                            this.board[i - 3][j].shift();
                        } else if (this.board[i - 4].length > 0) {
                            this.playerDeck.push(this.board[i - 4][j]);
                            this.board[i - 4][j].shift();
                        } else if (this.board[i - 5].length > 0) {
                            this.playerDeck.push(this.board[i - 5][j]);
                            this.board[i - 5][j].shift();
                        } else if (this.board[i - 6].length > 0) {
                            this.playerDeck.push(this.board[i - 6][j]);
                            this.board[i - 6][j].shift();
                        } else if (this.board[i - 7].length > 0) {
                            this.playerDeck.push(this.board[i - 7][j]);
                            this.board[i - 7][j].shift();
                        }
                    }
                }
            }
            
            // dependendo do valor da carta, desenhar no sitio correto
            // falta decidir a posição para cada número!
            switch (cardToPlay.valor) {
                case 1:
                    this.deck.drawCard(150, 100);
                    break;
                case 2:
                    this.deck.drawCard(270, 100);
                    break;
                case 3:
                    this.deck.drawCard(390, 100);
                    break;
                case 4:
                    this.deck.drawCard(510, 100);
                    break;
                case 5:
                    this.deck.drawCard(630, 100);
                    break;
                case 6:
                    this.deck.drawCard(750, 100);
                    break;
                case 7:
                    this.deck.drawCard(870, 100);
                    break;
                case 8:
                    this.deck.drawCard(990, 100);
            }
            
            // retirar carta da mão do jogador
            this.playerHand.splice(this.playerHand.indexOf(cardToPlay), 1);
            for (let i = 0; i < this.play.length; i++) {
                this.play.splice(i, 1);
            }

            //método para ir buscar carta ao deck
            this.playerHand.push(this.deck.dealCard());
            this.enemy.playCards();  
        } else {
            console.log('Card not found')
        }
    }
    }
}