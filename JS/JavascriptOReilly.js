
//               // 01234567  
// let umaString = 'O rato roeu a roupa do rei de roma.';

// console.log(umaString.charAt(3));
// console.log(umaString + ' em um lindo dia. ');
// console.log(umaString.concat(' em um lindo dia.'));
// console.log(`${umaString} em um lindo dia.` ); // a melhor forma, a meu ver 
// console.log(umaString.indexOf('texto')) // buscar o indice de um determinado elemento dentro da string 
// console.log(umaString.lastIndexOf('e'));
// console.log(umaString.replace(/r/g, '#'));  // substitui os r por # 
// console.log(umaString.length);
// console.log(umaString.slice(-5, umaString.length -2)); // fatiamento - pega um segmento do texto 
// console.log(umaString.substring(umaString.length - 5));
// console.log(umaString.split(' ', 3)) // selecionando qtde de elementos e os organizando em array 

// Livro O`Reilly Javascript - anotacoes

// strings

//          //   012345678910 
// let string = 'ola pessoal';
// console.log(string.charAt(4));
// console.log(string.charAt(string.length -1));
// console.log(string.slice(0,3));
// console.log(string.indexOf('a')); // posicao da primeira letra 'a';
// console.log(string.lastIndexOf('s'));
// console.log(string.indexOf('a', 3)); // determinando o indice de um elemento apos uma determinada posicao 
// console.log(string.split(' ')) // transformando minha string em array - substrings;
// console.log(string.replace('o', '0')); // substituindo um elemento por outro;
// console.log(string.toUpperCase('s'));
// console.log(string.toLowerCase('s'));

// objetos 

// let meuObjeto = {x:1};  // x = 1
// meuObjeto.x = 2;  // x = 2
// meuObjeto.y = 3; // x = 2 , y = 3


         
// let meuArray = [1,2,3]; // meuArray[0] = 1, meuArray[1] = 2, meuArray[2] = 3
// meuArray[0] = 0; // meuArray[0] = 0;
// meuArray[3] = 4; // meuArray[3] = 4  => meuArray = [0,2,3,4]

// console.log(meuObjeto, meuArray)
;

    //    um objeto  outro objeto 
// let meuObjeto = {x:1}, p = {x:1};
// console.log(meuObjeto === p);

// // um array  outro array  
// let a = [], b = [];
// console.log(a === b);

// let a = [];
// let b = a;
// b[0] = 1;
// a[0]
// console.log(a===b);

// criar uma copia de um array utilizando o laco 'for' 
let a = ['a', 'b', 'c'];
let b = [];
for(var i = 0; i < a.length; i ++){
    b[i] = a[i]}

function equalArrays(a,b){ 
    if(a.length != b.length) return false;

    for(let i = 0; i < a.length; i++)
    if(a[i] !==b[i]) return false;

    return true;
        
    }

    console.log(equalArrays(a,b));




















