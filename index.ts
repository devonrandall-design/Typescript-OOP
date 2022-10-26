// Import stylesheets
import './style.css';





// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
//appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const gridDiv: HTMLElement = document.getElementById('grid');

for (let row = 0; row < 5; row++) {

const rowDiv: HTMLElement = document.createElement('div')
rowDiv.classList.add('row')
gridDiv.append(rowDiv)


for (let col = 0; col < 5; col++) {

  const colDiv: HTMLElement = document.createElement('div')
  colDiv.classList.add('col')
  rowDiv.append(colDiv)
}

}

class Player {
  color: string;
  posX: number;
  posY: number;
  character: HTMLElement;
  classType: string;
  width: number
  height: number
  
    constructor(pColor: string) {
      this.color = pColor;
      this.posX = 168
      this.posY = 92
      this.character = document.createElement('div')
      this.classType = 'mainPlayer'
      this.height = 50;
      this.width = 50;
  
      
    }
  
    changeClass() {
      this.character.classList.add(this.classType)
    }
  
    renderPlayer() {
      let column = document.querySelector('.col')
      column.append(this.character)
      this.changeClass()
      this.character.style.left = this.posX + 'px'
      this.character.style.top = this.posY + 'px'
      this.character.style.width = `70px`
      this.character.style.height = `70px`
      this.character.style.backgroundColor = this.color;

  
    }

    moveLeft () {
      if (this.posX <= 168) {
        return
      } else {
        this.posX -= 100;
        this.character.style.left = this.posX + 'px'
      }
    }

    moveRight () {
      if (this.posX >= 568) {
        return
      } else {
        this.posX += 100;
        this.character.style.left = this.posX + 'px'
      }
    }



  }

  const playerOne = new Player('blue')



  playerOne.renderPlayer()

  playerOne.character.addEventListener('keydown', handleMove)

  function handleMove(e: KeyboardEvent) {
    console.log(e)
  }



