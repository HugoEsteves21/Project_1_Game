class Game {
    constructor() {
        this.enemy = null;
        this.board = null;
        this.deck = null;
        this.controls = null;
        this.player = null;
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.intervalId = null;
    }

    start() {
        this.deck = new Deck(allCards, this.ctx);
        this.board = new Board(this.deck, this.ctx);
        this.enemy = new Enemy(this.deck, this.board);
        this.player = new Player(this.deck, this.board, this.enemy);
        this.controls = new Controls(this.player, this.enemy);
        this.intervalId = setInterval(this.update, 1000 / 60);
        this.deck.shuffleDeck();
        this.player.gameStart();
        this.enemy.gameStart();
        this.controls.keyboardEvents()
    }

    update = () => {
        this.board.drawBoard();
        // o jogador joga primeiro
        // adicionamos pontos, se existirem
        //this.player.addPoints();
        // o bot joga
        // adicionamos pontos, se existirem
        //this.enemy.addPoints();
        this.checkGameOver();
    }

    checkGameOver() {
        if (this.enemy.playerHand.length === 0 && this.player.playerHand.length === 0) {
            this.stopGame();
            this.checkWinner;
        }
    }

    stopGame() {
        clearInterval(this.intervalId);
    }

    checkWinner() {
        if (this.player.playerDeck.length > this.enemy.playerDeck.length) {
            console.log(`You win with ${this.player.playerDeck.length} points!`)
        } else if (this.player.playerDeck.length < this.enemy.playerDeck.length) {
            console.log(`You loose with ${this.player.playerDeck.length} points!`)
        } else if (this.player.playerDeck.length === this.enemy.playerDeck.length) {
            console.log("It's a draw");
        }
    }

}