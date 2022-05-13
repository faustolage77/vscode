/* jogo da velha - passos (pensar em cada passo como uma funcao)

> desenhar o tabuleiro no terminal; 
> marcar a posicao da jogada;
  > nao sobrepor 
  > alternar entre os jogadores a cada rodada;
> verificar se ha um vencedor;
> caso todas as opcoes estejam preenchidas e nao tenha um vencedor, exibir a mensagem 'DEU VELHA!';

> extra:
> reiniciar partida
> selecionar simbolo no inicio da partida;
> acumular pontuacao do venecedor  // POSSIVEL SOLUCAO : CRIAR UMA LISTA COM TODAS AS SENTENCAS POSSIVEIS DE VITORIA  
*/

// const boardData = ['X',0,'x',0,'x','x',0,0,0];

const emptyString = ' ';

const boardData = Array(9).fill(emptyString);

console.log(boardData);

function drawBoard(positions) {
    console.log(`

    ${positions[0]} | ${positions[1]} | ${positions[2]}
    -------
    ${positions[3]} | ${positions[4]} | ${positions[5]}
    -------
    ${positions[6]} | ${positions[7]} | ${positions[8]} 
    
    `);

}

function showTutorial() {
    console.log(` ###Escolha a posicao que deseja jogar baseado no tabuleiro abaixo###


    0 |1 |2
    ----------
    3 |4 |5
    ----------
    6 |7 |8 
    
 #######################################################################################
    `);

}

function isEmpty(positions) {
    if(boardData[positions]=== emptyString){
        return true
    } 
        return false
    }

function setPlayerMovement(positions, player) { 
    if(isEmptypositions){
        boardData[positions] = currentPlayer;
    } else{
        console.log(`Posicao ${positions} Invalida`);
    }
    }
    boardData[positions] = player;


    function changePlayer(){
        if(currentPlayer === player[1]){
        currentPlayer = player[2];
    }else{
        currentPlayer = player[1];
    }
}
      







// showTutorial();
setPlayerMovement(6, 'x');
setPlayerMovement(1, 'o');
setPlayerMovement(4, 'o');
setPlayerMovement(8, 'x');
setPlayerMovement(6, 'o');
console.log(isEmpty(6));
drawBoard(boardData);
