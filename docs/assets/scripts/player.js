class Player extends Enemy {
    
    constructor(deck, board, enemy) {
        super(deck, board);
        this.enemy = enemy;
    }

    gameStart() {

        //let coordinates = [[10,10], [10, 170], [10, 330], [10, 490], [10, 650]]
        // preciso de chamar ja o new Deck() para poder usar o método?
        for (let i = 0; i < 5; i++) {
            this.playerHand.push(this.deck.dealCard());
        }
        console.log(this.playerHand)
        return this.playerHand;
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
         /*    for (let i = this.board.length - 1; i > 0; i--) {
                
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
            } */
            
            let foundCards = false;

            for (let i = 0; i < this.board.board.length; i++) {
                if(this.board.board[cardToPlay.valor - 1].length >= 3 && !foundCards){

                    //check array 1 eating 8

                    for (let j = cardToPlay.valor - 1; j > 0; j--){
                        if(this.board.board[j - 1].length){
                            let cardsInside = this.board.board[j - 1].splice(0)
                            this.playerDeck.push(...cardsInside)
                            this.board.board[j - 1] = []
                            console.log(" USER PLAYER DECK", this.playerDeck)
                            console.log("BOARD DELETED:", this.board.board[j -1])
                            console.log("WHOLE BOARD:", this.board.board)
                            foundCards = true
                            break;
                        }
                    }
                }
                
                //  console.log('cheguei aqui crl')
       /*          if (cardToPlay.valor === 1 && this.board.board[0].length >= 3 && this.board.board[7].length > 0) {
                    for (let p = 0; p < this.board.board[0].length; p++) {
                        this.playerDeck.push(this.board.board[7][p]);
                        this.board[7][p].shift();
                    }
                } */
                 
                //console.log(this.board.board.length)
                /* if (cardToPlay.valor === (i + 1) && this.board.board[i].length >= 3) {
                    for (let j = 0; j < this.board.board[i].length; j++) {
                        
                        if (this.board.board[i - 1].length > 0) {
                            this.playerDeck.push(this.board.board[i - 1][j]);
                            this.board.board[i - 1].shift();
                            console.log('Enemy deck', this.playerDeck)

                        } else if (this.board.board[i - 2].length > 0) {
                            this.playerDeck.push(this.board.board[i - 2][j]);
                            this.board.board[i - 2].shift();
                            console.log('Enemy deck', this.playerDeck)

                        } else if (this.board.board[i - 3].length > 0) {
                            this.playerDeck.push(this.board.board[i - 3][j]);
                            this.board.board[i - 3].shift();
                            console.log('Enemy deck', this.playerDeck)

                        } else if (this.board.board[i - 4].length > 0) {
                            this.playerDeck.push(this.board.board[i - 4][j]);
                            this.board.board[i - 4].shift();
                            console.log('Enemy deck', this.playerDeck)

                        } else if (this.board.board[i - 5].length > 0) {
                            this.playerDeck.push(this.board.board[i - 5][j]);
                            this.board.board[i - 5].shift();
                            console.log('Enemy deck', this.playerDeck)

                        } else if (this.board.board[i - 6].length > 0) {
                            this.playerDeck.push(this.board.board[i - 6][j]);
                            this.board.board[i - 6].shift();
                            console.log('Enemy deck', this.playerDeck)

                        } else if (this.board.board[i - 7].length > 0) {
                            this.playerDeck.push(this.board.board[i - 7][j]);
                            this.board.board[i - 7].shift();
                            console.log('Enemy deck', this.playerDeck)
                        }
                    }
                } */
            }
            
            // dependendo do valor da carta, desenhar no sitio correto
            // falta decidir a posição para cada número!
            switch (cardToPlay.valor) {
                case 1:
                    this.deck.drawCard1(150, 100);
                    break;
                case 2:
                    this.deck.drawCard2(270, 100);
                    break;
                case 3:
                    this.deck.drawCard3(390, 100);
                    break;
                case 4:
                    this.deck.drawCard4(510, 100);
                    break;
                case 5:
                    this.deck.drawCard5(630, 100);
                    break;
                case 6:
                    this.deck.drawCard6(750, 100);
                    break;
                case 7:
                    this.deck.drawCard7(870, 100);
                    break;
                case 8:
                    this.deck.drawCard8(990, 100);
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