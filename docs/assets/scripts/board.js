class Board {
    constructor(deck, ctx) {
        //this.canvas = document.getElementById('canvas');
        this.deck = deck;
        this.ctx = ctx;
        //this.background = new Image();
        // por decidir o tamanho do canvas
        this.width = 1100;
        this.height = 700;
        this.board = [[],[],[],[],[],[],[],[]];
        this.cardImgs = [
            "docs/assets/images/Card Images/Card 1.PNG",
            "docs/assets/images/Card Images/Card 2.PNG",
            "docs/assets/images/Card Images/Card 3.PNG",
            "docs/assets/images/Card Images/Card 4.PNG",
            "docs/assets/images/Card Images/Card 5.PNG",
            "docs/assets/images/Card Images/Card 6.PNG",
            "docs/assets/images/Card Images/Card 7.PNG",
            "docs/assets/images/Card Images/Card 8.PNG",
        ];
        this.img1 = new Image();
        this.img2 = new Image();
        this.img3 = new Image();
        this.img4 = new Image();
        this.img5 = new Image();
        this.img6 = new Image();
        this.img7 = new Image();
        this.img8 = new Image();
        this.img1.src = "docs/assets/images/Card Images/Card 1.PNG";
        this.img2.src = "docs/assets/images/Card Images/Card 2.PNG";
        this.img3.src = "docs/assets/images/Card Images/Card 3.PNG";
        this.img4.src = "docs/assets/images/Card Images/Card 4.PNG";
        this.img5.src = "docs/assets/images/Card Images/Card 5.PNG";
        this.img6.src = "docs/assets/images/Card Images/Card 6.PNG";
        this.img7.src = "docs/assets/images/Card Images/Card 7.PNG";
        this.img8.src = "docs/assets/images/Card Images/Card 8.PNG";
    }

    drawBoard = () => {
        
        //console.log(this.board)
        this.ctx.clearRect(0, 0, 1100, 700);
        this.drawBoardOne();
        this.drawBoardTwo();
        this.drawBoardThree();
        this.drawBoardFour();
        this.drawBoardFive();
        this.drawBoardSix();
        this.drawBoardSeven();
        this.drawBoardEight();
    }

  /*   drawSingleBoard(board, index){
        this.img.src = this.cardImgs[index]
        for (let i = 0; i < board.length; i++){
        this.ctx.drawImage(this.img, 10 + index * 100, 50 + i * 100, 100, 100 ) 
        }
    } */

    /* methods to draw each card on a specific place and increment 'y' to draw the cards
    with the same number below the ones that already exist on the board */
    drawBoardOne(){
        for (let i = 0; i < this.board[0].length; i++){
        this.ctx.drawImage(this.img1, 250 , 50 + i * 70, 70, 100 ) 
        }
    }
    drawBoardTwo(){
        for (let i = 0; i < this.board[1].length; i++){
        this.ctx.drawImage(this.img2, 350 , 50 + i * 70, 70, 100 ) 
        }
    }
    drawBoardThree(){
        for (let i = 0; i < this.board[2].length; i++){
        this.ctx.drawImage(this.img3, 450 , 50 + i * 70, 70, 100 ) 
        }
    }
    drawBoardFour(){
        for (let i = 0; i < this.board[3].length; i++){
        this.ctx.drawImage(this.img4, 550 , 50 + i * 70, 70, 100 ) 
        }
    }
    drawBoardFive(){
        for (let i = 0; i < this.board[4].length; i++){
        this.ctx.drawImage(this.img5, 650 , 50 + i * 70, 70, 100 ) 
        }
    }
    drawBoardSix(){
        for (let i = 0; i < this.board[5].length; i++){
        this.ctx.drawImage(this.img6, 750 , 50 + i * 70, 70, 100 ) 
        }
    }
    drawBoardSeven(){
        for (let i = 0; i < this.board[6].length; i++){
        this.ctx.drawImage(this.img7, 850 , 50 + i * 70, 70, 100 ) 
        }
    }
    drawBoardEight(){
        for (let i = 0; i < this.board[7].length; i++){
        this.ctx.drawImage(this.img8, 950 , 50 + i * 70, 70, 100 ) 
        }
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