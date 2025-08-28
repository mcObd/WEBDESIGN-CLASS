let FirstNumber = parseInt(window.prompt("Enter First Number:", 0));
let SecondNumber = parseInt(window.prompt("Enter Second Number:", 0));
let Operator = window.prompt("Enter Operator (+, -, *, /):", "+");

if (Operator === "+") {
    alert(`The result of ${FirstNumber} + ${SecondNumber} is: ${FirstNumber + SecondNumber}`);
} 
else if (Operator === "-") {
    alert(`The result of ${FirstNumber} - ${SecondNumber} is: ${FirstNumber - SecondNumber}`);
} 
else if (Operator === "*") {
    alert(`The result of ${FirstNumber} * ${SecondNumber} is: ${FirstNumber * SecondNumber}`);
} 
else if (Operator === "/") {
    // Optional: prevent divide-by-zero
    if (SecondNumber === 0 || FirstNumber === 0) {
        alert("Error: Cannot divide by zero!");
    } else {
        alert(`The result of ${FirstNumber} / ${SecondNumber} is: ${FirstNumber / SecondNumber}`);
    }
} 
else {
    alert("Invalid operator entered.");
}

// Calculator using switch statement

switch (true) {
    case (Operator === "+"):
        alert(`The result of ${FirstNumber} + ${SecondNumber} is: ${FirstNumber + SecondNumber}`)
        break;

    case (Operator === "-"):
        alert(`The result of ${FirstNumber} - ${SecondNumber} is: ${FirstNumber - SecondNumber}`)
        break;

    case (Operator === "*"):
        alert(`The result of ${FirstNumber} * ${SecondNumber} is: ${FirstNumber * SecondNumber}`)
        break;

    case (Operator === "/"):
        
         if (SecondNumber === 0 || FirstNumber === 0) {
        alert("Error: Cannot divide by zero!");
    } else {
        alert(`The result of ${FirstNumber} / ${SecondNumber} is: ${FirstNumber / SecondNumber}`);
    }
        break;

    default:   alert("Invalid operator entered.");
        break;
}