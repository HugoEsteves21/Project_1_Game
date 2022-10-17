class Game {
    constructor() {
        this.enemy = null;
        this.board = null;
        this.deck = null;
        this.player = null;
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.intervalId = null;
    }

    start() {
        this.deck = new Deck(allCards, this.ctx);
        this.board = new Board(this.deck, this.ctx);
        this.enemy = new Enemy(this.deck, this.board);
        //this.player = new Player(this.deck, this.board);
        this.intervalId = setInterval(this.update, 1000 / 60);
        this.deck.shuffleDeck();
        //this.player.gameStart();
        this.enemy.gameStart();
        // need to create the event to click the card I want to play!
    }

    update = () => {
        this.board.drawBoard();
        // o jogador joga primeiro
        //this.player.playCards();
        // adicionamos pontos, se existirem
        //this.player.addPoints();
        // o bot joga
        this.enemy.playCards();
        // adicionamos pontos, se existirem
        this.enemy.addPoints();
        this.checkGameOver();
    }

    checkGameOver() {
        if (this.enemy.playerHand.length === 0 && this.player.playerHand.length === 0) {
            this.stop();
        }
    }

    stopGame() {
        clearInterval(this.intervalId);
    }

}