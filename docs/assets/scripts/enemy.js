const { Deck } = require('./deck.js');
const { allCards } = require('./cards.js')

class Enemy {
    
    constructor() {
         this.playerHand = [];
         this.playerDeck = []; 
         this.deck = null;
         
    }

    gameStart() {

        // preciso de chamar ja o new Deck() para poder usar o método?
        for (let i = 0; i < 5; i++) {
            this.playerHand.push(this.deck.dealCard());
        }
        return this.playerHand;
    }

    playCards() {
        
        // validar se playerHand() esta vazio?
        // usar metodo cardsOnBoard da classe board que adiciona a carta ao array do tabuleiro
        // E usar o metodo drawCard da classe deck que vai desenhar a carta numa determinada posição
        // e retirar cartas da hand
        
    }

    addPoints() {

        //adicionar, se existirem, cartas ao deck do jogador
    }


}

let deck = new Deck(allCards);
let enemy = new Enemy();
console.log(enemy.gameStart());