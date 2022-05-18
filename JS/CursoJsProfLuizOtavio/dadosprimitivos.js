/*
Primitivos (imutaveis) - string, number, boolean, undefined.
null, (bigint, symbol)
*/

// let nome = 'Luiz';
// nome = 'Otavio';
// console.log(nome.toUpperCase(nome));

// let a = 'A';
// let b = a; // copiando o valor de a para b;
// console.log(a,b); // A A 

// a = 'outra coisa';

// console.log(a,b);

// Referencia (mutavel: arrays, objects, functions)

// let a = [1, 2, 3];
// let b = [...a]; // aqui criamos uma "copia independente de a em b";
// let c = b; // c observa b , que nao necessariamente observa a;
//  // b aponta para o mesmo valor

//  console.log(a,b);

//  a.push(4); // b tambem sera afetado pois apontam para o mesmo valor na memoria

//  console.log(a,b); 

//  b.pop(); // tambem afeta a e b

//  console.log(a,b,c);

//  a.push('Luiz'); // afeta todos

//  console.log(a,b,c); 

 // valores primitivos sao COPIADOS, referencia sao valores alocados no mesmo lugar da memoria, passados por referencia;

const a = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
};

const b = {...a};

// console.log(b);

a.nome = 'Joao'; // aqui, b nao sera afetado

console.log(a, b);


