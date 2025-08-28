// DOM -> Document Object Model

// DOM Methods

//  getElementById
const elementId = document.getElementById('main_header');
// console.log(elementId);

//  getElementsByClassName
const elementsByClassName = document.getElementsByClassName('list_items');
// console.log(elementsByClassName);
for (let i = 0; i < elementsByClassName.length; i++) {
       elementsByClassName[i].style.color = 'red'; 
}

// getElementByTagName
const liTag = document.getElementsByTagName('h1');
// console.log(liTag);

// queryselector
const wrapperDiv = document.querySelector('.container');
// console.log(wrapperDiv);
wrapperDiv.style.display = "3px solid green";

// querySelectorAll
const queryItems = document.querySelectorAll('.list_items');
// console.log(queryItems);

// Creating Elements
// To create an html element, we use the createElement method
const ul = document.querySelector('ul');
const newLi = document.createElement('li');
//  We make use of the append method to add the new element to the existing list
ul.append(newLi);
newLi.textContent= "Fantastic Four";
newLi.style.color='red';

// Change the h1 text conentent to "Top Rated Movies" and ensure that the color is gold]
elementId.textContent= "Top Rated Movies";
// elementId.style.color='gold';
// or 
elementId.setAttribute("style", "color: gold;");

// Traversing element in the DOM
// 1. parentElement
const parentElement = newLi.parentElement.parentElement;
console.log(parentElement);
// 2. childElement
const childElement = parentElement.children[0];
console.log(childElement);