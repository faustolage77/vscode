/*
Fausto Lage tem 31 anos, pesa 100kg
tem 1.8 de altura e seu imc e 25
*/

const nome = 'Fausto';
const sobrenome = 'Lage';
const idade = 31;
const peso = 100
const altura = 1.8; 
let imc = peso / (altura * altura); // peso dividido por altura * altura 
let anoNascimento = 2022 - idade;

console.log(nome, sobrenome, 'tem', idade,'anos de idade,', 'pesa', peso, 'kg, tem', altura, 'de altura e seu imc e', imc);
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${altura} metros de altura, e seu imc e ${imc}`) ; 


// template strings 


