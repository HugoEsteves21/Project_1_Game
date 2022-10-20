let screenGameOver = document.getElementById('game-over');
let screenGameWin = document.getElementById('game-win');

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
        this.gameRun = false;
        this.cardImg = new Image();
    }

    start() {
        this.deck = new Deck([...allCards], this.ctx);
        this.board = new Board(this.deck, this.ctx);
        this.enemy = new Enemy(this.deck, this.board);
        this.player = new Player(this.deck, this.board, this.enemy);
        this.controls = new Controls(this.player, this.enemy);
        this.deck.shuffleDeck();
        this.player.gameStart();
        this.enemy.gameStart();
        this.controls.keyboardEvents();
        this.gameRun = true;
        this.intervalId = setInterval(this.update, 1000 / 60);
        console.log(this.deck);
    }

    update = () => {
        //this.board.drawHand(this.player.playerHand);
        this.board.drawBoard();
        this.drawHand()
        this.checkGameOver();
    }

    checkGameOver() {
        
        if (this.enemy.playerHand.length === 0 && this.player.playerHand.length === 0) {
            this.checkWinner();
            if (this.player.playerDeck.length > this.enemy.playerDeck.length) {
                screenGameOver.classList.remove('hidden');
                screenGameWin.classList.add('hidden');
            } else {
                screenGameOver.classList.remove('hidden');
                screenGameWin.classList.add('hidden');
            }
            this.stopGame();
            //screenGameOver.classList.remove('hidden');
            //screenGameOver.classList.add('hidden');
            //screenGameWin.classList.remove('hidden');
        }
    }

    stopGame() {
        clearInterval(this.intervalId);
        this.enemy = null;
        this.board = null;
        this.deck = null;
        this.controls = null;
        this.player = null;
        //let screenGameOver = document.getElementById('game-over');
        //screenGameOver.classList.remove('hidden');
        this.gameRun = false;
    }

    checkWinner() {
        
        if (this.player.playerDeck.length > this.enemy.playerDeck.length) {
            let winner = document.getElementById('game-over-message');
            winner.innerHTML = `You win with ${this.player.playerDeck.length} points!`
            console.log(`You win with ${this.player.playerDeck.length} points!`)
        } else if (this.player.playerDeck.length < this.enemy.playerDeck.length) {
            let loser = document.getElementById('game-over-message');
            loser.innerHTML = `You loose with ${this.player.playerDeck.length} points!`
            console.log(`You loose with ${this.player.playerDeck.length} points!`)
        } else if (this.player.playerDeck.length === this.enemy.playerDeck.length) {
            console.log("It's a draw");
        }
    }

    drawHand() {

        //this.ctx.clearRect(0, 0, 1100, 700);

        for (let i = 0; i < this.player.playerHand.length; i++){
            this.cardImg.src = `docs/assets/images/Card Images/Card ${this.player.playerHand[i].valor}.PNG`
            this.ctx.drawImage(this.cardImg, 50 , 60 + i * 120, 70, 100 );
            
        }

        /* for (let i = 0; i < hand.length; i++) {
            switch (hand[i].valor) {
                case 1:
                    this.ctx.drawImage(this.img1, 50 , 50 + i * 70, 70, 100 );
                    break;
                case 2:
                    this.ctx.drawImage(this.img2, 50 , 50 + i * 70, 70, 100 );
                    break;
                case 3:
                    this.ctx.drawImage(this.img3, 50 , 50 + i * 70, 70, 100 );
                    break;
                case 4:
                    this.ctx.drawImage(this.img4, 50 , 50 + i * 70, 70, 100 );
                    break;
                case 5:
                    this.ctx.drawImage(this.img5, 50 , 50 + i * 70, 70, 100 );
                    break;
                case 6:
                    this.ctx.drawImage(this.img6, 50 , 50 + i * 70, 70, 100 );
                    break;
                case 7:
                    this.ctx.drawImage(this.img7, 50 , 50 + i * 70, 70, 100 );
                    break;
                case 8:
                    this.ctx.drawImage(this.img8, 50 , 50 + i * 70, 70, 100 );
                    break;
            }
        } */
    }

}