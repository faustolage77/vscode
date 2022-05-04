/*1 - Faça um algoritmo que leia o nome e a idade de uma pessoa e ao final escreva o 
nome da pessoa, sua idade e se ela é maior de idade ou não.
2 - Faça um algoritmo que leia o nome e o salário de um funcionário. O funcionário
 terá um aumento de 18%, caso seu novo salário seja acima de R$3.000,00, ele 
 deverá declarar imposto. Ao fim do algoritmo diga ao usuário seu nome, seu novo salário e se ele deverá ou 
 não declarar imposto.
3 - Faça um algoritmo que leia o nome e as três notas de uma disciplina de um aluno 
e ao final escreva o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para 
aprovação é igual ou superior a 8. 
*/





//1



/*const maiorIdade = 18 // definindo a constante de maioridade
let nome = window.prompt('Diga seu nome: ')   
console.log(nome)  // captando a info do usuario
let idade= window.prompt('Diga sua idade') 
console.log(idade);
if (idade >=maiorIdade) {  // determinando que o programa faca a checagem
    console.log('Voce e maior de idade. ');
}
else {
    console.log('Voce nao  maior de idade.')
}
*/




// const faixadeIsencao = 3000.00  //  definindo a faixa de isencao do imposto 
// let nome = window.prompt('Digite seu nome:');  // capturando os dados do usuario 
// console.log(nome);

// let salario = window.prompt('Digite seu salario:');
// console.log(salario)

// salario = parseInt(salario)  // convertendo a string para number 
// console.log(typeof salario)



// let novoSalario = salario + (salario * 18 /100)  // determinando a operacao 

// console.log(novoSalario)


// if (novoSalario >= 3000.00) {
//     console.log('Voce devera declarar seu imposto.');
// }

// else {
//     console.log('Voce não devera declarar seu imposto.');
// }




/* 3 - Faça um algoritmo que leia o nome e as três notas de uma disciplina de um aluno e ao final escreva o nome do aluno, sua média e se
 ele foi aprovado, sabendo-se que a média para aprovação é igual ou superior a 8.
 */



const notaDeCorte = 8;  //  definindo a nota minima

let nome = window.prompt('Digite seu nome:');  

let prova1 = window.prompt('Digite sua nota na prova1:');  // colhendo a info do aluno
let prova2 = window.prompt('Digite sua nota na prova2:');  
let prova3 = window.prompt('Digite sua nota na prova3:');  

prova1 = parseInt(prova1)  // convertendo para number 
prova2 = parseInt(prova2)
prova3 = parseInt(prova3)

media = (prova1 + prova2 + prova3) / 3  // determinando o calculo da media 

console.log(media)

if (media >= 8){  // determinando aprovacao ou reprocacao 
    console.log(`${nome},MEDIA, ${media}, 'APROVADO`)
}
else{
    console.log(`${nome}, MEDIA, ${media}, 'REPROVADO`)
}











