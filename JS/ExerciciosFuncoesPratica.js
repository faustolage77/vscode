// https://contactmentor.com/js-function-exercises-solution/

// 1. Write a JavaScript function to print the “Hello World” message

// function sayHelloWorld(user){ // criar uma variavel para servir de parametro
//     const string = 'Hello World';
//     console.log(`${user} says : ${string}`);
//     return string
// }

// sayHelloWorld('Carol'); // aqui em baixo crio um argumento para ser puxada pelo parametro da funcao la em cima

// ################

// 2. Write a function that returns the square of a number

// function squareRoot(n){
//     let square = n * n 
//     console.log(square);
//     return square
// }

// squareRoot(9898);

// ################

/* 3. Write a function to convert Celsius to Fahrenheit
Function `calFahrenheit()` returns the converted Celsius value 
to Fahrenheit value based on the formula `(Celsius × 9/5) + 32 = Fahrenheit */

// function convertToFarenheit(n){
//     const farenheit = (n * 9/5) + 32;
//     console.log(farenheit);
//     return farenheit
// }

// convertToFarenheit(30);

// ################

// 4. Write a function to find the area of a given Rectangle

// function triangleArea(width, heigth){
//     const triangleArea = (width * heigth);
//     console.log(triangleArea);
//     return triangleArea;
// }

// triangleArea(18,29);

// ################

// 5. Write a function to find the area and perimeter of a Circle

// function circleAreaAndPerimeter(radius) {
//     const circleArea = 3.14 * (radius**2);
//     console.log(circleArea);
//     return circleArea;
// }

// circleAreaAndPerimeter(12);

// perimetro = 2 * PI * raio
// area =      PI * raio**2 

// function circleValues(rad){
//     return `Perimeter: ${2*Math.PI*rad}, Area: ${Math.PI*rad*rad}` ;

// }

// console.log(circleValues(12));

//  ################

// 6. Write a function to reverse a number

// function reverseNumber(n) {
//     let string = 'string test';
//     string.split('');
//     return string;

// }

// reverseNumber('string test');

// ################

// 7. Count number of Vowels in String



function countVowel(string){ // definindo a minha funcao e os parametros
    let count = 0; // sempre comecar com o contador
    string = string.toLowerCase(); // converter para minuscula para nao dar erro de leitura

    for(let i = 0; i<string.length;i++){ // formando o loop
        if(string.charAt(i) =='a' || string.charAt(i) =='e' || string.charAt(i) =='i' // definindo os parametros de verificacao
        || string.charAt(i) =='o' || string.charAt(i) =='u'){
            count++ // incrementar o contador
        }
    }
    return count
}

console.log(countVowel('Teste'));