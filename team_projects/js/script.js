const board = document.querySelector('main');
const player1 = 'X';
const player2 = 'O';
let player = player1;
let turn_counter = 0;
const button = document.querySelector('button');

function displayCharacter(box){
    box.target.innerHTML = player;
    if(player === player1) {
      player = player2;
    } else { player = player1;
    }
}

function resetGame()
  {
    console.log('Hello')
    const board = document.querySelector('main');
    for (let i = 0; i < board.children.length; i++) {
        board.children[i].innerHTML = "";
    }
  }

board.addEventListener('click', displayCharacter);
button.addEventListener('click', resetGame);


