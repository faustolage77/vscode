// const array = [1,2,3];
// array.push('Carol');
// array[0] = 'Fausto';
// let array = 'outra coisa' // isso eu nao posso fazer pois usei const em cima;

// console.log(array);

// const pessoa1 = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25
// };

// console.log(pessoa1.idade)



// function criaPessoa(nome, sobrenome, idade) { // estabelecendo os parametros da minha function 
//     return { nome, sobrenome, idade};
// }

// const pessoa1 = criaPessoa('Luiz', 'Otavio', 25); // aqui dentro dos parenteses coloco os argumentos que serao incorporados pelos parametros la em cima 
// const pessoa2 = criaPessoa('Pedro', 'Castro', 25);
// const pessoa3 = criaPessoa('Ana', 'Iob', 30);
// const pessoa4 = criaPessoa('Fausto', 'Lage', 31);
// const pessoa5 = criaPessoa('Andre', 'Ferreira', 32);
// const pessoa6 = criaPessoa('Marco', 'Lage', 30);

// console.log(pessoa1,pessoa4, pessoa6)


const pessoa1 ={
    nome: 'Luiz', sobrenome:'Otavio', idade: 25,
    fala() {
    console.log(`a minha idade atual eh ${this.idade}`);
},
incrementaIdade(){
    this.idade++;
}

}; 

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();


