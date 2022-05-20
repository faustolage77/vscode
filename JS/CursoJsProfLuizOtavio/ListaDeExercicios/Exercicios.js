// https://www.teaching-materials.org/javascript/exercises/functions

/* Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.
*/

// function tellFortune(numerOfChildren, partnerName, location, job){

//     let myFortune = (`You will be a ${job} in ${location} and married to ${partnerName} with ${numerOfChildren} kids.`);

//     console.log(myFortune);

// }

// tellFortune(3, 'Leo', 'Texas', 'Lawyer');
// tellFortune(1, 'Lucia', 'Brazil', 'Doctor');
// tellFortune(2, 'Nigel', 'London', 'Engineer');
// tellFortune(1, 'Pedro', 'Mexico', 'Druglord')

/*The Puppy Age Calculator
You know how old your dog is in human years, but what about dog years? Calculate it!

Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.
Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

// function calculateDogAge(n){

//     let dogYear = (n * 7)
//         console.log(`Your doggie is ${dogYear} years old in dog years!`)

// }

// calculateDogAge(2)
// calculateDogAge(6)
// calculateDogAge(9)


/*The Lifetime Supply Calculator
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age).
outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/

// function calculateSupply(age, dailyAmount){
// const maxAge = 80;
// let neededAmount =  (maxAge - age) * 365;


// console.log(`You will need ${neededAmount} to last you until the ripe old age of ${maxAge}`);

// }

// calculateSupply(10, 2);
// calculateSupply(32, 3);
// calculateSupply(30, 4);


/*The Geometrizer
Create 2 functions that calculate properties of a circle, using the definitions here.

Create a function called calcCircumfrence:

Pass the radius to the function.
Calculate the circumference based on the radius, and output "The circumference is NN".
Create a function called calcArea:

Pass the radius to the function.
Calculate the area based on the radius, and output "The area is NN".
*/

// function calcCircumfrence(radius) {

//     let circumference = 2 * (Math.PI * radius);
//     console.log(`Your circle's circumference is ${circumference}`);

// }

// function calcArea(radius) {
//     let area = (Math.PI * (radius ** 2));
//     console.log(`Your circle's area is ${area}`);

// }

// calcCircumfrence(20);
// calcArea(10); 

/*The Temperature Converter
It's hot out! Let's make a converter based on the steps here.

Create a function called celsiusToFahrenheit:

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Create a function called fahrenheitToCelsius:

Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."
*/

// function celsiusToFahrenheit(c){

//     let convertToFarenheit = (c * 1.8) + 32;
//     console.log(`A temperatura em Farenheit e ${convertToFarenheit}`);
// }

// celsiusToFahrenheit(30);

// function FarenheiToCelsius(f){
//     let convertToCelsius = ((f - 32)*5)/9;
//         console.log(`A temperatura em Celsius e ${convertToCelsius}`);
// }


// celsiusToFahrenheit(12);

// lista de exercicios https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php

/* 1. Write a JavaScript function that reverse a number. Go to the editor
Example x = 32243;
Expected Output : 34223
*/

