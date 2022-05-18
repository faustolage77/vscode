const readlineSync = require('readline-sync');

const emptyString = '  '; // criar uma string vazia para receber as jogadas
let boardData = Array(9).fill(emptyString); // criando um array com 9 posicoes para irem preenchendo a string vazia 
const players = {  // criando um objeto para determinar os jogadores 
  1: 'x',
  2: 'o',
};

let currentPlayer = players[1]; // alternando entre jogadores determinando que o jogador atual sera o jogador 1 (la embaixo ele alterna para o 2)

const winnerConditions = [ // determinando o array de winning streaks
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
    currentPlayer = players[1]; // alternando entre players. se o atual e o 1, ele passa a ser o 2, quando ele se torna o 2 logo em seguida ele volta a ser o 1 e 
    //por ai vai
  }
}

// parei aqui

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
