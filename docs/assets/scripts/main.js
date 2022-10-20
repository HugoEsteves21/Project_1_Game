let game;

window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      if(!game) {
        startGame();
      }
    };

    document.getElementById('restart-button').onclick = () => {
      if(game && !game.gameRun) {
        screenGameOver.classList.add('hidden');
        screenGameWin.classList.add('hidden');
        startGame();
      }
    };

    document.getElementById('win-button').onclick = () => {
      if(game && !game.gameRun) {
        screenGameOver.classList.add('hidden');
        screenGameWin.classList.add('hidden');
        startGame();
      }
    };
  
    function startGame() {
      game = new Game();
      game.start();
    }
  };