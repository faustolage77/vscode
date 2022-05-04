/*  1########### 
Criar a função (inverter) que recebe uma string e retorna um inverso dela “salve” => “evlas”

2########## 
Criar a função (contarNumeroVogais) que recebe uma string e retorna o número de vogais que ela tem
 (maiusculas e minusculas) “salve” => 2



3############
 Extra: Criar a função (fazerRelatorio) que recebe
 uma string e retorna um objeto com a própria string, o inverso da string e quantas vogais 
 ela tem “salve” => { palavra: “salve”, palavraInverso: “evlas”, numeroVogais: 2 }

4############

xtra2: Se receber algo diferente de string da um console.log(“oh carai”) e retorna undefined
*/

// ###################################################################################



// 1 

// Criar a função (inverter) que recebe uma string e retorna um inverso dela “salve” => “evlas”

// function inverter(){
//     let palavra = window.prompt('Me diga uma palavra: ');  
//     console.log(palavra);

//     let stringParaArray = palavra.split('');  


//     palavraInvertida = stringParaArray.reverse()  

//     console.log(palavraInvertida.join('')) 
//     alert(palavraInvertida.join(''))
// }; 


// inverter()  

////////////////////////////////

/*Criar a função (contarNumeroVogais) que recebe uma string e retorna o número de vogais que ela tem
 (maiusculas e minusculas) “salve” => 2 */

 function fazerRelatorio(Desenvolvimento) {
    const tamanho = Desenvolvimento.length;
    let inverso = '';
    let stringVazia = '';
    let vogais = 0;
    for (let letra of Desenvolvimento) {
      if (
        letra == 'a' ||
        letra == 'e' ||
        letra == 'i' ||
        letra == 'o' ||
        letra == 'u' ||
        letra == 'A' ||
        letra == 'E' ||
        letra == 'I' ||
        letra == 'O' ||
        letra == 'U'
      ) {
        vogais++;
      }
      if (
        letra == 'a' ||
        letra == 'e' ||
        letra == 'i' ||
        letra == 'o' ||
        letra == 'u' ||
        letra == 'A' ||
        letra == 'E' ||
        letra == 'I' ||
        letra == 'O' ||
        letra == 'U'
      ) {
        stringVazia = stringVazia + letra;
      }
    }
    for (let letra of Desenvolvimento) {
      inverso = letra + inverso;
    }
  
    if (vogais > 0) {
      console.log(
        `A palavra escrita foi ${Desenvolvimento} e ao contrário fica assim ${inverso}.`
      );
      console.log(`Ela tem ${vogais} vogais, que são: ${stringVazia}.`);
    } else {
      console.log('Não ha vogais na sua palavra!');
    }
  }
  fazerRelatorio('Fausto');