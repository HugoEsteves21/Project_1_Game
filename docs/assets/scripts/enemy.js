class Enemy {

    constructor(deck, board) {
         this.playerHand = [];
         this.playerDeck = [];
         // array with the cards played each round (because the method cardsOnBoard only accepts arrays)
         this.play = []; 
         this.deck = deck;
         this.board = board;
    }

    gameStart() {

        // preciso de chamar ja o new Deck() para poder usar o método?
        for (let i = 0; i < 5; i++) {
            this.playerHand.push(this.deck.dealCard());
            
        }
        console.log(this.playerHand)
        return this.playerHand;
    }

    playCards() {
        
        // validar se playerHand() esta vazio?
        if (this.playerHand.length !== 0) {
            
            // escolher carta random da mão do jogador
        
            let enemyPlay = this.playerHand[Math.floor(Math.random() * this.playerHand.length)]
            console.log("ENEMY hand", this.playerHand);
            console.log("to play",enemyPlay);
            //console.log(enemyPlay);

            // por a carta que quero jogar no array play
            this.play.push(enemyPlay);
            console.log(this.play);

            // adicionar a carta ao array do board
            this.board.cardsOnBoard(this.play);
            //console.log(this.board.board);

            // verificar se "comemos" alguma carta
            let foundCards = false;
            
            for (let i = 0; i < this.board.board.length; i++) {
                if(this.board.board[enemyPlay.valor - 1].length >= 3 && !foundCards){

                    if(enemyPlay.valor === 1 && this.board.board[7].length){
                        let cardsInside8 = this.board.board[7].splice(0);
                        this.playerDeck.push(...cardsInside8);
                        this.board.board[7] = [];
                        console.log(" ENEMY PLAYER DECK", this.playerDeck);
                        console.log("BOARD DELETED:", this.board.board[7]);
                        console.log("WHOLE BOARD:", this.board.board);
                        foundCards = true;
                    }

                    for (let j = enemyPlay.valor - 1; j > 0; j--){
                        if(this.board.board[j - 1].length){
                            let cardsInside = this.board.board[j - 1].splice(0);
                            this.playerDeck.push(...cardsInside);
                            this.board.board[j - 1] = [];
                            console.log(" ENEMY PLAYER DECK", this.playerDeck);
                            console.log("BOARD DELETED:", this.board.board[j - 1]);
                            console.log("WHOLE BOARD:", this.board.board);
                            foundCards = true;
                            break;
                        }
                    }
                }

                //console.log(this.board.board.length)
                /* if (enemyPlay.valor === (i + 1) && this.board.board[i].length >= 3) {



                    for (let j = 0; j < this.board.board[i].length; j++) {
                        
                        if (this.board.board[i - 1].length > 0) {
                            this.playerDeck.push(this.board.board[i - 1][j]);
                            this.board.board[6].shift();
                            console.log('Enemy deck', this.playerDeck);

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
            /* switch (enemyPlay.valor) {
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
            } */
            
            // retirar carta da mão do jogador
            this.playerHand.splice(this.playerHand.indexOf(enemyPlay), 1);
            for (let i = 0; i < this.play.length; i++) {
                this.play.splice(i, 1); 
            }

            //método para ir buscar carta ao deck
            if(this.deck.cards.length) {
                this.playerHand.push(this.deck.dealCard());
            }
        }
    }

    addPoints() {

    }
}