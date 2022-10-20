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

            /* for (let p = 0; p < this.playerHand.length; p++) {
                if()
            }

                drawBoardOne(){
                    for (let i = 0; i < this.board[0].length; i++){
                    this.ctx.drawImage(this.img1, 250 , 50 + i * 70, 70, 100 ) 
                    }
                } */
           
            // escolher carta random da mão do jogador
        
            /* let cardToPlay = this.playerHand[Math.floor(Math.random() * this.playerHand.length)] */
           
            console.log("PLAYER Hand", this.playerHand);

            // por a carta que quero jogar no array play
            this.play.push(cardToPlay);
            console.log(this.play);

            // adicionar a carta ao array do board
            this.board.cardsOnBoard(this.play);
            //console.log(this.board.board);

            // verificar se "comemos" alguma carta           
            let foundCards = false;

            for (let i = 0; i < this.board.board.length; i++) {
                if(this.board.board[cardToPlay.valor - 1].length >= 3 && !foundCards){

                    if(cardToPlay.valor === 1 && this.board.board[7].length){
                        let cardsInside8 = this.board.board[7].splice(0);
                        this.playerDeck.push(...cardsInside8);
                        this.board.board[7] = [];
                        console.log(" USER PLAYER DECK", this.playerDeck);
                        console.log("BOARD DELETED:", this.board.board[7]);
                        console.log("WHOLE BOARD:", this.board.board);
                        foundCards = true;
                    }

                    for (let j = cardToPlay.valor - 1; j > 0; j--){
                        if(this.board.board[j - 1].length){
                            let cardsInside = this.board.board[j - 1].splice(0);
                            this.playerDeck.push(...cardsInside);
                            this.board.board[j - 1] = [];
                            console.log(" USER PLAYER DECK", this.playerDeck);
                            console.log("BOARD DELETED:", this.board.board[j - 1]);
                            console.log("WHOLE BOARD:", this.board.board);
                            foundCards = true;
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
            /* switch (cardToPlay.valor) {
                case 1:
                    this.deck.drawCard1(150, 100);
                    console.log('JOGUEI')
                    break;
                case 2:
                    this.deck.drawCard2(270, 100);
                    console.log('JOGUEI')
                    break;
                case 3:
                    this.deck.drawCard3(390, 100);
                    console.log('JOGUEI')
                    break;
                case 4:
                    this.deck.drawCard4(510, 100);
                    console.log('JOGUEI')
                    break;
                case 5:
                    this.deck.drawCard5(630, 100);
                    console.log('JOGUEI')
                    break;
                case 6:
                    this.deck.drawCard6(750, 100);
                    console.log('JOGUEI')
                    break;
                case 7:
                    this.deck.drawCard7(870, 100);
                    console.log('JOGUEI')
                    break;
                case 8:
                    this.deck.drawCard8(990, 100);
                    console.log('JOGUEI')
            }
             */
            // retirar carta da mão do jogador
            this.playerHand.splice(this.playerHand.indexOf(cardToPlay), 1);
            for (let i = 0; i < this.play.length; i++) {
                this.play.splice(i, 1);
            }

            //método para ir buscar carta ao deck
            if(this.deck.cards.length){
                this.playerHand.push(this.deck.dealCard());
            }
            this.enemy.playCards();  
        } else {
            console.log('Card not found')
        }
    }
    }
}