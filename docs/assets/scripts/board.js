class Board {
    constructor(ctx) {
        //this.canvas = document.getElementById('canvas');
        this.ctx = this.ctx;
        this.background = new Image();
        // por decidir o tamanho do canvas
        this.width = 1000;
        this.height = 700;
        this.board = [[],[],[],[],[],[],[],[]];
    }

    drawBoard() {
        // ainda por decidir como fica o tabuleiro de jogo
        this.background.src = '/docs/assets/images/Kariba Board.webp';
        this.ctx.drawImage(this.background, 0, 0, this.width, this.height);
    }

    cardsOnBoard(cards) {
        // cards seria um array com objectos - o array pode ter entre 1 e 5 objectos
        // cada objecto seria uma carta
        for(let i = 0; i < cards.length; i++) {
            if(cards[i].value === 1) {
                this.board[0].push(cards[i]);
            } else if (cards[i].value === 2) {
                this.board[1].push(cards[i]);
            } else if (cards[i].value === 3) {
                this.board[2].push(cards[i]);
            } else if (cards[i].value === 4) {
                this.board[3].push(cards[i]);
            } else if (cards[i].value === 5) {
                this.board[4].push(cards[i]);
            } else if (cards[i].value === 6) {
                this.board[5].push(cards[i]);
            } else if (cards[i].value === 7) {
                this.board[6].push(cards[i]);
            } else if (cards[i].value === 8) {
                this.board[7].push(cards[i]);
            }
        }
    }
}