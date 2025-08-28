/*
const button = document.querySelector('button');

button.addEventListener('click', e => { 
    console.log('e gives the event listener object:', e); 
    console.log('e.target gives the selected element: ', e.target);
    console.log('e.target.textContent gives content of selected element: ', e.target.textContent) })
*/

const box1 = document.querySelector('.box_1');
const box2 = document.querySelector('.box_2');
const box3 = document.querySelector('.box_3');

/*
box1.addEventListener('mouseover', function changeBgColor() {
    box1.style.backgroundColor = 'red';
})
*/

function changeBgColor(selectedElement) {
    selectedElement.style.backgroundColor = 'red';
}


function removeBgColor(selectedElement) {
    selectedElement.style.backgroundColor = 'initial';
    
}
const boxes = document.querySelectorAll('.boxes');
for (let i = 0; i < boxes.length; i++) {
    let box = boxes[i];
    box.addEventListener('mouseover', function (){changeBgColor(box) });
    
    box.addEventListener('mouseout', ()=> { removeBgColor(box) });
};
console.log(parseInt("23*3"));

let num1 = "6988";
let num2 = "3695";
let operator = "+";