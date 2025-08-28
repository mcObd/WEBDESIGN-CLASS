//  Functions

// DRY : Don't Repeat Yourself

// Function Declarations
/* 
function name(params) {
  //code to be executed
  }
*/

// Example 1
function logger(){
    console.log('Today date is 30th of July 2025');
}
// logger(); // Calling the function

// Example 2 : Working with parameters and arguments
function displayInConsole(message){
    console.log(message);
}
// displayInConsole('Today we will be learning the concept of functions in JavaScript');

/*
Class work
Create a function that will display the Second Smallest Number in an Array
myArray = [45, 89, 65, 23, 12, 78, 34, 56];
function findSecondSmallest(arr) {}
console : "the second smallest number is 23"
*/
// solution
myArray = [45, 89, 65, 23, 12, 78, 34, 56];

function findSecondSmallest(arr) {
    let smallest = arr[0]
    let secondSmallest = arr[0]
    // Smallest number
    for (let index = 1; index < arr.length; index++) {
        if (arr[index] < smallest) {
            smallest = arr[index];     
        }
        
    }
}
function findSecondSmallest(arr) {
    let smallest = Infinity;
    let secondSmallest = Infinity;

    // Find the smallest number
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    // Find the second smallest number
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > smallest && arr[i] < secondSmallest) {
            secondSmallest = arr[i];
        }
    }

    console.log(`The smallest number is ${smallest}`);
    console.log(`The second smallest number is ${secondSmallest}`);
}


findSecondSmallest(myArray);



// Class work 2 : Create a function that will retrive a username from ther email address
// //  Example;
// getUserNameFromEmail("Israelolaozi-moses@piit.com.ng")
// output : Israelolaozi-moses
// hint : check out  strip() and split() strings methods

// let email = "Obodosmcquendie@gmail.com";

// function  userName(name) {

//     return name.split("@")[0];
// }
// console.log(userName(email)); 

// ARROW FUNCTIONS
// an arrow function is a shorter syntax for writing function expressions in JavaScript.

// Example
const add = (a, b) => a + b;
// console.log(add(5, 10)); // Output: 15

// Example 2
const greet = (name) => {
    return `Hello, ${name}!`;
};

// arrow function equivalent
const greetArrow = name => `Hello, ${name}!`;

// expression function
const square = function(num) {
    return num * num;
};
