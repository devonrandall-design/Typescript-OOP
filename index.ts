// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
//appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const gridDiv: HTMLElement = document.getElementById('grid');

for (let row = 0; row < 5; row++) {
  const rowDiv: HTMLElement = document.createElement('div');
  rowDiv.classList.add('row');
  gridDiv.append(rowDiv);

  for (let col = 0; col < 5; col++) {
    const colDiv: HTMLElement = document.createElement('div');
    colDiv.classList.add('col');
    rowDiv.append(colDiv);
  }
}

class Player {
  color: string;
  posX: number;
  posY: number;
  character: HTMLElement;
  classType: string;
  width: number;
  height: number;
  direction: any;

  constructor(pColor: string) {
    this.color = pColor;
    this.posX = 0;
    this.posY = 0;
    this.character = document.createElement('div');
    this.classType = 'mainPlayer';
    this.height = 50;
    this.width = 50;
    this.direction = {
      left: 'https://hosting.photobucket.com/images/i/devonrandall_design/Left.png?width=320&height=320&fit=bounds',
      right: 'https://hosting.photobucket.com/images/i/devonrandall_design/Right.png?width=320&height=320&fit=bounds',
      up: 'https://hosting.photobucket.com/images/i/devonrandall_design/Up.png?width=320&height=320&fit=bounds',
      down: 'https://hosting.photobucket.com/images/i/devonrandall_design/Down.png?width=320&height=320&fit=bounds',
    };
  }

  changeClass() {
    this.character.classList.add(this.classType);
  }

  renderPlayer() {
    let column = document.querySelector('.col');
    column.append(this.character);
    this.changeClass();
    this.character.style.left = this.posX + 'px';
    this.character.style.top = this.posY + 'px';
    this.character.style.width = `80px`;
    this.character.style.height = `80px`;
    this.character.style.backgroundImage = `url(${this.direction.down})`;
  }

  moveLeft() {
    this.character.style.backgroundImage = `url(${this.direction.left})`;
    if (this.posX <= 0) {
      return;
    } else {
      this.posX -= 100;
      this.character.style.left = this.posX + 'px';
    }
  }

  moveRight() {
    this.character.style.backgroundImage = `url(${this.direction.right})`;
    if (this.posX >= 400) {
      return;
    } else {
      this.posX += 100;
      this.character.style.left = this.posX + 'px';
    }
  }

  moveUp() {
    this.character.style.backgroundImage = `url(${this.direction.up})`;
    if (this.posY <= 0) {
      return;
    } else {
      this.posY -= 100;
      this.character.style.top = this.posY + 'px';
    }
  }

  moveDown() {
    this.character.style.backgroundImage = `url(${this.direction.down})`;
    if (this.posY >= 400) {
      return;
    } else {
      this.posY += 100;
      this.character.style.top = this.posY + 'px';
    }
  }
}

const playerOne = new Player(
  'https://www.pngfind.com/pngs/m/476-4769662_pokemon-fire-red-character-png-download-pokemon-fire.png'
);

playerOne.renderPlayer();

window.addEventListener('keydown', handleMove);

function handleMove(e: KeyboardEvent) {
  if (e.code === 'ArrowRight') {
    console.log(e.code);
    playerOne.moveRight();
  } else if (e.code === 'ArrowLeft') {
    console.log(e.code);
    playerOne.moveLeft();
  } else if (e.code === 'ArrowUp') {
    console.log(e.code);
    playerOne.moveUp();
  } else if (e.code === 'ArrowDown') {
    console.log(e.code);
    playerOne.moveDown();
  } else {
    return;
  }
}

//PokeMon Battle

class Pokemon {
  stats: any;
  moves: any;

  constructor( stats, moves) {

  this.stats = stats
  this.moves = moves

  }

}

const Bulbasaur = {

  name: 'Bulbasaur',

  stats: {
    hp: 21,
    atk: 12,
    def: 11,
    spAtk: 11,
    spDef: 13,
    spd: 11,
  },

  moves: {
    tackle: [40, 100, ['Normal']],
    growl: [0.8]
  }


}

const Pickachu = {


name: 'Pikachu',

  stats: {
    hp: 20,
    atk: 13,
    def: 10,
    spAtk: 9,
    spDef: 11,
    spd: 15,
  },

  moves: {
    tackle: [40, 100, ['Normal']],
    growl: [0.8]
  }


}


const myPoke = new Pokemon(Bulbasaur.stats, Bulbasaur.moves)

const wildPoke = new Pokemon(Pickachu.stats, Pickachu.moves)

console.log(myPoke.stats, myPoke.moves)

function startBattle() {

  while (myPoke.stats.hp || wildPoke.stats.hp >= 0) {
 
  }


}


