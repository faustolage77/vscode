
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
// let a = ['a', 'b', 'c'];
// let b = [];
// for(var i = 0; i < a.length; i ++){
//     b[i] = a[i]}

//     // codigo para comparar 2 arrays;
// function equalArrays(a,b){ 
//     if(a.length != b.length) return false;

//     for(let i = 0; i < a.length; i++)
//     if(a[i] !==b[i]) return false;

//     return true;
        
//     }

//     console.log(equalArrays(a,b));


//  Conversoes de tipo 

// console.log(10 + 'objects'); // converte 10 + 'objects' automaticamente para string;
// console.log(typeof (10 + 'objects'));
// console.log('7'*'4'); // converte automaticamente p number 

// variaveis globais e locais (dentro do escopo da funcao)


// let scope = 'global';

// function checkScope(){
//     let scope = 'local';
//     return scope;
// }

// console.log(checkScope()); // a variavel declarada dentro do escopo da funcao tem preferencia sobre a declarada fora ;

// let scope = 'global scope';
// function checkScope2(){
//     scope = 'local'; // redefinindo a variavel global sem utilizar let .. problema 
//     myScope = 'local';
//     return [scope, myScope];
    
// }

// checkScope2();
// console.log(scope, myScope);



//  aninhamento de funcao - nested scope whthin a function

/*let scope = 'global scope';
function checkScope(){
    let scope = 'local scope';

    function nested(){
        let scope = 'nested scope';
        return scope;
    }
    return nested();
    return checkScope()


    }

    console.log(checkScope());
*/ 
    // console.log(nested()); // nao eh lido pois esta dentro do escopo de uma funcao


//  escopo e icamento 


// function test(o){
//     let i = 0;

//     if(typeof o == 'object'){
//         let j = 0;

//         for(let k = 0; k < 10; k++){

//             console.log(k);
//         }
//         console.log(k);
//     }
//     console.log(j);
// }

// console.log(test());

//

// let scope = 'global';
// function funcaoTeste(){
//     console.log(scope);
//     let scope = 'local';
// }

// console.log(funcaoTeste());

// let p ={x: 2.3, y: -1.2}; 
// let q ={};
// q.x = 2.3; q.y = -1.2 // fazendo com que ambos tenham as mesmas propriedades;

// console.log(p, q); 


//expressoes definidoras de funcao 

// let square = function(x){
//     return x * x ;
// }

// console.log(square(10));

// expressoes de acesso a propriedade

let objeto = {x:1, y:{z:3}}

// indices   0       1    2   
let array = [objeto, 4, [5,6]];

console.log(objeto.x); // 1: propriedade 'x' da expressao 'objeto';
console.log(objeto.y.z); // undefined = chamando a propriedade 'z' da expressao 'o.y';
console.log(objeto['x']);
console.log(array[1]); // indice 1 do array: 4;
console.log(array[2]['1']); // buscando o indice 1 do array que esta localizado no indice 3 do meu array (aninhado);
console.log(array[0].x); // buscando o indice 0 do meu array, que no caso eh o objeto acima, e tambem acessando sua propriedade 'x';




