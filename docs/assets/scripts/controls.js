class Controls {
    constructor(player, enemy) {
      this.player = player;
      this.enemy = enemy;
    }
  
    keyboardEvents() {
      window.addEventListener('keydown', (e) => {
        
        // adicionar código
        
        switch (e.code) {
          case 'Digit1':
            this.player.playCards(1);
            break;
          case 'Digit2':
            this.player.playCards(2);
            break;
          case 'Digit3':
            this.player.playCards(3);
            break;
          case 'Digit4':
            this.player.playCards(4);
            break;
          case 'Digit5':
            this.player.playCards(5);  
            break;
          case 'Digit6':
            this.player.playCards(6); 
            break;
          case 'Digit7':
            this.player.playCards(7);  
            break;
          case 'Digit8':
            this.player.playCards(8);  
            break;
        }
      });
    }
  }