let umaString = "Um texto ";
console.log(umaString)

console.log(umaString.charAt(5));

console.log(umaString.concat('em um lindo dia'));

console.log(umaString.indexOf('texto'));  // buscar a posicao de caracteres

console.log(umaString.lastIndexOf('m')); // a mesma coisa do indexOf porem de tras p frente

console.log(umaString.replace('Um', 'Outra'));  // substituir expressoes 

let outraString = "O rato roeu a roupa do rei de roma";

console.log(outraString.replace('r', '#'));

console.log(outraString.length);

console.log(outraString.slice(-1)) // pegando somente a ultima string 

console.log(outraString.split(''))