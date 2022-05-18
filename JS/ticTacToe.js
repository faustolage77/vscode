const readlineSync = require('readline-sync');

const emptyString = '  ';
let boardData = Array(9).fill(emptyString);
const players = {
  1: 'x',
  2: 'o',
};

let currentPlayer = players[1];

const winnerConditions = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

function hasWinner() {
  return winnerConditions.some((winnerCondition) => {
    return winnerCondition.every((index) => {
      return boardData[index] === currentPlayer;
    });
  });
}

function drawBoard(positions) {
  console.log(`
    ${positions[0]} | ${positions[1]} | ${positions[2]}
    -----------
    ${positions[3]} | ${positions[4]} | ${positions[5]}
    -----------
    ${positions[6]} | ${positions[7]} | ${positions[8]}
  `);
}

function showTutorial() {
  console.log(`
  ### Escolha a posiÃ§ao que deseja jogar baseado no tabuleiro abaixo ###

     0 | 1 | 2
    -----------
     3 | 4 | 5
    -----------
     6 | 7 | 8

  ######################################################################
  `);
}

function isEmpty(position) {
  return boardData[position] === emptyString;
}

function changePlayer() {
  if (currentPlayer === players[1]) {
    currentPlayer = players[2];
  } else {
    currentPlayer = players[1];
  }
}

function setPlayerMovement(position) {
  if (isEmpty(position)) {
    boardData[position] = currentPlayer;
    changePlayer();
  } else {
    console.log(`A posiÃ§Ã£o ${position} jÃ¡ foi usada`);
  }
}

function isEndGame() {
  let totalEmptyString = 0;
  for (const position of boardData) {
    if (position === emptyString) totalEmptyString++;
  }
  return totalEmptyString === 0;
}

function move() {
  const choice = readlineSync.question('Escolha uma posiÃ§Ã£o para jogar: ');
  setPlayerMovement(choice);
}

function clearBoard() {
  boardData = Array(9).fill(emptyString);
}

function start() {
  showTutorial();
  while (true) {
    move();
    drawBoard(boardData);
    if (hasWinner()) {
      console.log(`O jogador ${currentPlayer} venceu!!!`);
      clearBoard();
    } else if (isEndGame()) {
      console.log('Deu Velha');
      clearBoard();
    }
  }
}


start();
