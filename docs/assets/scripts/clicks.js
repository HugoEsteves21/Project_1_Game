class Clicks {
    constructor(car) {
      this.car = car;
    }
  
    keyboardEvents() {
      window.addEventListener('click', (e) => {
        
        // adicionar código
        
        /* switch (e.code) {
          case 'ArrowLeft':
            if (this.car.x > 30) {
              this.car.x -= 10;
            }
            break;
          case 'ArrowRight':
            if (this.car.x + this.car.w < 470) {
              this.car.x += 10;
            }
            break;
        } */
      });
    }
  }