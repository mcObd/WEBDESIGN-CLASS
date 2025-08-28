// Arrays
/*
An array is a collection of different data types which are ordered and changeable
(modifiable). An array allows storing duplicate elements and
An array can be empty, or it may have different data type values.

How to create an empty array
In JavaScript, we can create an array in different ways.

*/


let arr1 = Array(1, 2, 3);
// console.log(arr1); // Output: [1, 2, 3]

let arr2 = [10,20,30,40,50]
// console.log(arr2); // Output: [10, 20, 30, 40, 50]

let arr3 = new Array(100, 200, 300);
// console.log(arr3); // Output: [1, 2, 3]

// // creating array with values
// let numbers =        [0,3.14, 2.718, 1.618, 42, 54, 99];
// //accessing elements   0  1    2      3      4   5   6  
// console.log(numbers[4]); // Output: 0
// console.log(`Number array = [${numbers}] and it is made up of ${numbers.length} items`); // Output: Number array = [0,3.14,2.718,1.618,42,54,99]

const fruits = ['apple', 'banana', 'cherry', 'date'];
// push
// The push() method adds one or more elements to the end of an array and returns the new length of the array.
fruits.push('elderberry');
// console.log(fruits, fruits.length); // Output: ['apple', 'banana', 'cherry', 'date', 'elderberry']

// shift
// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
let firstFruit = fruits.shift();
// console.log(firstFruit); // Output: 'apple'
// console.log(fruits); // Output: ['banana', 'cherry', 'date', 'elderberry']

// pop
// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
let lastFruit = fruits.pop();
// console.log(lastFruit); // Output: 'elderberry'

// unshift
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
fruits.unshift('apricot', 'blueberry');
// console.log(fruits)

// indexOf
// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
let index = fruits.indexOf('cherry');
console.log(index, fruits); // Output: 2


// includes
// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
let hasBanana = fruits.includes('banana');
let hasGrapes = fruits.includes('grapes');
console.log(hasBanana, hasGrapes); 

// higher order functions
// every()
// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

const numArray = [1, 2, 3, 4, 5, -8];
function isPositive(num) {
    return num > 0;
}
let result = numArray.every(isPositive);
// console.log(result); // Output: false

// map()
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

const numbersArray = [2, 3, 4, 5, 6];

function Cube(number) {
    return number ** 3;
}
const cubedArray = numbersArray.map(Cube);
console.log(cubedArray); // Output: [8, 27, 64, 125, 216]

// filter()
const studentScores = [23, 87, 70, 59, 90, 50];
// filter out students who scored above 60
function above60(Score)
{
    return Score >= 60;
}
let passedStudents = studentScores.filter(above60);
console.log(passedStudents);


// Assignment: research on the flat(), from(), isArray(), 
// join(), reduce(), reverse(), slice(), splice(), some(), find(), findIndexOf(), forEach()
// Send it to my email : israelolaozi-moses@piit.com.ng as a text file.

// Array.prototype.flat() returns a new array with all sub-array elements concatenated into it up to the specified depth
const depthArray = [1, 2, [3, 4, [5, 6]]];
function flattenArray(depth)
{
    return depthArray.flat()
}
console.log(depthArray.flat())

// from()
// The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.

const iterable = 'hello';
const arrayFromIterable = Array.from(iterable);
console.log(arrayFromIterable); 

// isArray()
// The Array.isArray() method determines whether the passed value is an Array.

const isArraycheck = [1, 2, 3];
console.log(Array.isArray(isArraycheck)); // Output: true

// join()
// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.

let joinArray = [1,2,3,4,5];
console.log(joinArray.join()) //or console.log(joinArray.join(-))

// reduce()
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// const numbers = [1, 2, 3, 4, 5];

// function sumArray(arr) {
//   // we’ll implement this in the next section
//   return arr.reduce(/* … */);
// }

// // call the function and log its result
// console.log(sumArray(numbers)); // prints 15

// reverse()
// The reverse() method reverses the elements of an array in place. The first array element
// becomes the last and the last becomes the first.
const reverseArray = [1, 2, 3, 4, 5];
console.log(reverseArray.reverse())

// slice()
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
const sliceArray = [1, 2, 3, 4, 5];
console.log(sliceArray.slice(2, 4))

// splice()
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
const spliceArray = [1, 2, 3, 4, 5];
spliceArray.splice(3, 0,'a', 'b'); // removes 1 element at index 2 and adds 'a' and 'b'
console.log(spliceArray); // Output: [1, 2, 'a', '

// some()
// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.

const someArray = [1, 2, 3, 4, 5];
function Test(numbers) {
    return numbers > 4;
}
console.log(someArray.some(Test)) // true

// find()
// The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
const findAge = [12, 15, 18, 20, 25];
function AgeTest(numbers) {
    return numbers >= 18;
}
console.log(findAge.find(AgeTest)) // true


// findIndexOf()
// The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. If no values satisfy the testing function, -1 is returned.
const findIndexArray = [12, 15, 18, 20, 25];
function IndexTest(numbers) {   
    return numbers >= 18;
}
console.log(findIndexArray.findIndex(IndexTest)) // Output: 2

// forEach()
// The forEach() method executes a provided function once for each array element.
const forEachArray = [1, 2, 3, 4, 5];
forEachArray.forEach(function(item, index) {
    console.log(`Item at index ${index} is ${item}`);
});
// Output:
