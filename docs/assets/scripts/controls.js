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
            this.player.playCards();
            this.enemy.playCards();  
            break;
          case 'Digit2':
            this.player.playCards();
            this.enemy.playCards();  
            break;
          case 'Digit3':
            this.player.playCards();
            this.enemy.playCards();  
            break;
          case 'Digit4':
            this.player.playCards();
            this.enemy.playCards();  
            break;
          case 'Digit5':
            this.player.playCards();
            this.enemy.playCards();  
            break;
          case 'Digit6':
            this.player.playCards();
            this.enemy.playCards();  
            break;
          case 'Digit7':
            this.player.playCards();
            this.enemy.playCards();  
            break;
          case 'Digit8':
            this.player.playCards();
            this.enemy.playCards();  
            break;
        }
      });
    }
  }