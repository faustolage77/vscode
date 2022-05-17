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

function triangleArea(width, heigth){
    const triangleArea = (width * heigth);
    console.log(triangleArea);
    return triangleArea;
}

triangleArea(18,29);