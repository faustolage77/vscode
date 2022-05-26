// console.log('Luiz Otavio' && 0 && 'Maria'); // 0

//FALSY (valores avaliados como false);
/* 

false;
0
'' "" '' 
null / undefined
Nan
*/

// console.log('Luiz' && 'Maria'); // Maria

// function falaOi(){
//     return 'Oi'; // somente retorna o oi se a minha variavel for non false
// }

// let vaiExecutar = 'Joaozinho';

// console.log(vaiExecutar && falaOi()); // false - pois a variavel vaiExecutar eh falsa (linha 19);


// console.log(0 || false || null || 'Luiz Otavio' || true); // Luiz Otavio - o OR || PRECISA DE APENAS 1 RESULTADO VERDADEIRO E NAO LE NADA APOS ENCONTRAR


// const corUsuario = 'null';

// const corPadrao = corUsuario || 'preto'; 

// console.log(corPadrao); // preto pois o 1o resultado verdadeiro encontrado foi preto; 

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e); // 'false'


