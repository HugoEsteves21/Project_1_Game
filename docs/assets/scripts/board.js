class Board {
    constructor(deck, ctx) {
        //this.canvas = document.getElementById('canvas');
        this.deck = deck;
        this.ctx = ctx;
        this.background = new Image();
        // por decidir o tamanho do canvas
        this.width = 1000;
        this.height = 700;
        this.board = [[],[],[],[],[],[],[],[]];
    }

    drawBoard() {
        // ainda por decidir como fica o tabuleiro de jogo
        this.background.src = '/docs/assets/images/Kariba Board.webp';
        this.ctx.drawImage(this.background, 0, 0, 500, 250);
    }

    cardsOnBoard(cards) {
        // cards seria um array com objectos - o array pode ter entre 1 e 5 objectos
        // cada objecto seria uma carta
        for(let i = 0; i < cards.length; i++) {
            if(cards[i].valor === 1) {
                this.board[0].push(cards[i]);
            } else if (cards[i].valor === 2) {
                this.board[1].push(cards[i]);
            } else if (cards[i].valor === 3) {
                this.board[2].push(cards[i]);
            } else if (cards[i].valor === 4) {
                this.board[3].push(cards[i]);
            } else if (cards[i].valor === 5) {
                this.board[4].push(cards[i]);
            } else if (cards[i].valor === 6) {
                this.board[5].push(cards[i]);
            } else if (cards[i].valor === 7) {
                this.board[6].push(cards[i]);
            } else if (cards[i].valor === 8) {
                this.board[7].push(cards[i]);
            }
        }
    }
}