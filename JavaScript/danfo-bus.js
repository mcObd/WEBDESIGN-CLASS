// Assignment Question

// Title : Danfo Bus Fare Calculator

// Scenario:

// You are tasked with building a simple JavaScript program that acts like a fare calculator for Lagos danfo buses. 
// The goal is to help passengers know if they have enough money for their trip.

// Requirements:

// Your program should do the following:

// 1. Ask the user for their destination (e.g. Ojota, Yaba, Ikeja).
// 2. Ask the user how much money they have.
// 3. Check the fare for the chosen destination using the following prices:
// Lekki – ₦1500
// Ajah – ₦500
// Lakowe – ₦500

// 4. Decide what to display using conditional statements:

// ✅ If the user has enough money:
// Display a message like:
// “Oya enter bus! You paid ₦*, your change is ₦*.”

// If the user doesn’t have enough money:
// Display a message like:
// “Your money is not enough! You still need ₦\\\_ more.”

// ⚠ If the user types a location that is not on the list:
// Display a message like:
// “There is no bus going to that destination!”

// Instructions:

//  Write the entire code inside a function called  'danfoFareCalculator()'.
// Use if/else statements to check the destination and the user’s money.
// At the end of your code, call the function so it runs automatically.

function danfoFareCalculator() {
let destination = prompt("Where are you going?").toLowerCase();
let money = parseInt(prompt("How much do you have?"));
let ojotaFare = 2500;
let yabaFare = 2700;
let ikejaFare = 2300;
let lekkiFare = 1000;
let ajahFare = 600;
let lakoweFare = 400;

let fare;

if (destination === "lakowe") {
  fare = lakoweFare;
} else if (destination === "ajah") {
  fare = ajahFare;
} else if (destination === "lekki") {
  fare = lekkiFare;
} else if (destination === "ikeja") {
  fare = ikejaFare;
} else if (destination === "yaba") {
  fare = yabaFare;
} else if (destination === "ojota") {
  fare = ojotaFare;
} else {
  alert("There is no bus going to that destination!");
  return; 
}


if (money >= fare ) {
    let change = money - fare;
    alert(`Oya enter bus! You paid ${"₦" + money}, your change is ${"₦" + change}`);
}
else {
    let remainderMoney = fare -  money;
    alert(`Your money is not enough, you still need ${"₦" + remainderMoney}`)
}


}
danfoFareCalculator()