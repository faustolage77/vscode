const nome = 'Fausto'
const sobrenome ='Lage'
const idade = '31'
const peso = 100
const altura = 1.80
let imc = peso / (altura * altura)
let anoNascimento = 2022 - idade
console.log(anoNascimento)
console.log(imc)

console.log(`${nome} ${sobrenome} tem ${idade} 
anos de idade, pesa ${peso} kg , tem ${altura} de altura, ${imc} de imc e nasceu em ${anoNascimento}`)