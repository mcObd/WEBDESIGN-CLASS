const numbers = [1, 2, 3, 4, 5]
let [num1, ,num2, ,num3] = numbers;
// console.log(num1, num2, num3)

const names = [undefined, 'Brook', 'David']
let [firstPerson = 'Asabeneh', secondPerson, thirdPerson] = names
// console.log(firstPerson, secondPerson, thirdPerson)


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let [number1, number2, number3, ...rest] = nums;
// console.log(number1, number2, number3);
// console.log(rest);

//Destructuring during iteration
const countries = [

    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]
// using for..of
for (const [country, city] of countries) {
    // console.log(country, city);
}

// or
for (let index = 0; index < countries.length; index++) {
    const [country, city] = countries[index];
    // console.log(country, city);
}

// Destructuring an object

// object literals
const person = {
  firstName: "Starry",
  lastName: "Tunes",
  age: 30,
  hobbies: ["movies", "music", "sports"],
  address: {
    street: "50 main st",
    city: "Boston",
    state: "MA",
  },
};
person.email = 'princestarry@gmail.com' // adding more properties 
console.log(person.firstName, person.lastName); // to print both first name and last name
console.log(person.hobbies[1]); // to get hobbies from the array of hobbies
console.log(person.address.city); // to get city to print out


// using destructuring
const { firstName, lastName, age, hobbies, address:{city}} = person;

// console.log(hobbies[2])
// console.log(city)

// console.log(person)

//destructuring  a function
const rect = { width: 10, height: 5 }

// const calculatePerimeter = rectangle => { return 2 * (rectangle.width + rectangle.height) }
// console.log(calculatePerimeter(rect)) // 60

const calculatePerimeter = ({ width, height }) => { return 2 * (width + height) }
console.log(calculatePerimeter(rect)) // 60

const todoList = [
  {task:'Prepare JS Test', time:'4/1/2020 8:30', completed:true},
  {task:'Give JS Test', time:'4/1/2020 10:00', completed:false},
  {task:'Assess Test Result', time:'4/1/2020 1:00', completed:false}
]

for (const {task, time, completed} of todoList){
  console.log(task, time, completed)
}
