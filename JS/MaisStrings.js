
              // 01234567  
let umaString = 'O rato roeu a roupa do rei de roma.';

console.log(umaString.charAt(3));
console.log(umaString + ' em um lindo dia. ');
console.log(umaString.concat(' em um lindo dia.'));
console.log(`${umaString} em um lindo dia.` ); // a melhor forma, a meu ver 
console.log(umaString.indexOf('texto')) // buscar o indice de um determinado elemento dentro da string 
console.log(umaString.lastIndexOf('e'));
console.log(umaString.replace(/r/g, '#'));  // substitui os r por # 
console.log(umaString.length);
console.log(umaString.slice(-5, umaString.length -2)); // fatiamento - pega um segmento do texto 
console.log(umaString.substring(umaString.length - 5));
console.log(umaString.split(' ', 3)) // selecionando qtde de elementos e os organizando em array 
