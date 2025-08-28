//  Loops

// console.log('Lifting weights repetition 1 🏋‍♀');
// console.log('Lifting weights repetition 2 🏋‍♀');
// console.log('Lifting weights repetition 3 🏋‍♀');
// console.log('Lifting weights repetition 4 🏋‍♀');
// console.log('Lifting weights repetition 5 🏋‍♀');
// console.log('Lifting weights repetition 6 🏋‍♀');
// console.log('Lifting weights repetition 7 🏋‍♀');
// console.log('Lifting weights repetition 8 🏋‍♀');
// console.log('Lifting weights repetition 9 🏋‍♀');
// console.log('Lifting weights repetition 10 🏋‍♀');

// Using a for loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(Lifting weights repetition ${rep} 🏋‍♀);
// }
// another example: for loop to display even numbers from 1 to 30
// for (let i = 1; i <= 30; i++) { 
//   if (i % 2 === 0) {
//     console.log(i);
//   
// }

// for loops with arrays
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2025 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
  ];
//   for (let i = 0; i < jonasArray.length; i++) {
//     console.log(jonasArray[i], typeof jonasArray[i]);
//   }
// console.log(jonasArray[4][2]); 

// Class work
// Prompt the user for a number and display its multiplication table
// Using for loop, the windows prompt() to get the user input and the alert() to display the table
/*
userInput = prompt("Enter a number to display its multiplication table:");
userValue = Number(userInput);
text_output= Multiplication table for ${userValue}:\n;

for (let index = 1; index <= 12; index++) {
    text_output += ${userValue} x ${index} = ${userValue * index}\n;
    
}
alert(text_output);
*/

// While loops
const birthYears = [1991, 2007, 1969, 2020];
const ages = [];

while (birthYears.length > 0) {
    // Get the last element from the birthYears array
    const year = birthYears.shift();
    // Calculate the age
    const age = 2025 - year;
    // Add the age to the ages array
    ages.push(age);
    
}
console.log(ages);

let dailyRoutine = ['wake up', 'quiet time', 'exercise', 'brush teeth', 'bath']; // fixed 'quite' to 'quiet'

for (let i = 0; i < dailyRoutine.length; i++) {
    if (dailyRoutine[i] === 'quiet time') {
        console.log('Skipping quiet time');
        continue; // Skip the current iteration
    }

    console.log(`Doing: ${dailyRoutine[i]}`); // fixed missing backticks

    if (dailyRoutine[i] === 'exercise') {
        console.log('Exercise completed, moving to the next task.');
        continue; // Skip to the next iteration
    }

    if (dailyRoutine[i] === 'brush teeth') {
        console.log('Brush teeth completed, moving to the next task.');
        continue; // Skip to the next iteration
    }

    if (dailyRoutine[i] === 'bath') {
        console.log('Bath completed, stopping the loop.');
        break; // Exit the loop
    }
}
