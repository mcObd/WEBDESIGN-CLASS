// Primitive data types

// number
// console.log(42); // integer
// console.log(3.14); // float

// string
// console.log("hello world")
// console.log('hello world'); // string with single quotes
// console.log(`hello world`); // string with template literals

// // boolean
// console.log(true); // boolean true
// console.log(false); // boolean false

var x1 = 10; // variable declaration
// console.log(x1);
let year = 2025; // block-scoped variable
let firstname = "Alice"; // string variable
let gpa = 3.14; // constant variable
// console.log(year, firstname, gpa)

// typeof 
// console.log(typeof year, typeof firstname, typeof gpa)

// strings 
// concatenatiopn
let sentence = "My name is " + firstname + " and I am in year " + year;
// console.log(sentence);

// string interpolation
let sentence2 = `My name is ${firstname} and I am in year ${year}`;
// console.log(sentence2);

// numbers
const mcQBirthYear = 2003;
const VictoriaBirthYear = 2025;

// arithmetic operations (+, -, *, /, %)
console.log(100*102);
let a = 10;
let b = 20;
console.log(a===b); // strict equality
// console.log(a==b); // loose equality

// relational operators (<, >, <=, >=)
console.log(mcQBirthYear < VictoriaBirthYear); // less than

// logical operators (&&, ||, !)
let x = 200;
let y = 100;

let exp1 = (x > y) && (x == y); // logical AND
let exp2 = (x > y) || (x == y); // logical OR
// console.log(exp1, exp2); 

exp1 = !((x > y) || (x == y));
//          !(false    ||    false)
//           !(false)   
// console.log(exp1);

// String methods
// let Language = 'JavaScript'
// console.log(Language.length); // length of the string
// console.log(Language[5]) //index of string
// console.log(Language.toLowerCase());
// console.log(Language.toUpperCase());
// console.log(Language.split("a"));

let MarkMass = 78;
let MarkHeight = 1.69;

let JohnMass = 92;
let JohnHeight =1.95;

let MBMI = (MarkMass / MarkHeight **2);
// console.log(parseInt(MBMI))
let JBMI = ( JohnMass / JohnHeight **2);
// console.log(JBMI.toFixed(2))

let markHigherBMI = `Does Mark have a higher BMI? ${MBMI > JBMI}`
// console.log(markHigherBMI);

// Conditional statesments and ternary operators
// if, if else, else
// let age = window.prompt("Enter your age:", 0);
// if (age >= 18) {
//     console.log(window.alert("You are eligible to open a bank account with us!"));
// }
//  else {
//         console.log(window.alert("You are not eligible to open a bank account with us!"))
// }


// let UserName = window.prompt("Enter your Name:", 0);
// let BirthYear = window.prompt("Enter your BirthYear:", 0);
// let age = 2025 - BirthYear

// if (age >= 18) {
//     console.log(window.alert("You are eligible to drive a car!"));
// } else {
//     console.log(window.alert(`You are not eligible to drive a car you have ${18 - age} more year to drive a car`))
// }

// Tenary Operators

// grade evaluation using else if 
let StudentScore = window.prompt("Enter your Score:", 0);
// A -> 80 - 100
// B -> 65 - 79
// C -> 50 - 64
// D -> 40 - 49
// E -> 35 - 39
// F -> 0 - 34

if (StudentScore >= 80 && StudentScore <= 100) {
    alert("You got an A, Excellent!");
}
else if (StudentScore >= 65 && StudentScore <= 79) {
    alert("You got a B, Good!");
}
else if (StudentScore >= 50 && StudentScore <= 64) {
    alert("You got a C, Fair!");
}
else if (StudentScore >= 40 && StudentScore <= 49) {
    alert("You got a D, Poor!");
}
else if (StudentScore >= 35 && StudentScore <= 39) {
    alert("You got an E, Very Poor!");
}
else if (StudentScore >= 0 && StudentScore <= 34) {
    alert("You got an F, Failed!");
}
else {
    alert("Invalid Score");
}
switch (true) {
    case (StudentScore >= 80 && StudentScore <= 100):
        alert("You got an A, Excellent!");
        break;

    case (StudentScore >= 65 && StudentScore <= 79):
        alert("You got a B, Good!");
        break;

    case (StudentScore >= 50 && StudentScore <= 64):
        alert("You got a C, Fair!");
        break;

    case (StudentScore >= 40 && StudentScore <= 49):
        alert("You got a D, Poor!");
        break;

    case (StudentScore >= 35 && StudentScore <= 39):
        alert("You got an E, Very Poor!");
        break;

    case (StudentScore >= 0 && StudentScore <= 34):
        alert("You got an F, Failed!");
        break;

    default:
        alert("Invalid Score");
}

// Truthy and falsey values
// falsey values : NaN, undefined, 0, null, ''
let height = 23;
if(height){
    console.log(" The vairiable is defined");
}else{
    console.log(" The vairiable is not defined");
}

// console.log(Boolean(NaN));
// console.log(Boolean(undefined));
// console.log(Boolean(0));
// console.log(Boolean(1));
// console.log(Boolean(null));
// console.log(Boolean(''));
// console.log(Boolean({}));