// Fonctionnalité 1


let monFooter = document.getElementsByTagName('footer')[0];


function onFoorterClick() { 
    console.log('clique');
}

monFooter.addEventListener("click", onFoorterClick);

//  Fonctionnalité 1_Bis


let myFooter = document.querySelector('footer');
let x=1;
function onFoorterClick() { 
    console.log('clic numéro '+ x);
    x++
}

myFooter.addEventListener("click", onFoorterClick);


//  Fonctionnalité 2

let menuHamburger = document.querySelector('button');
let navbarHeader = document.getElementById('navbarHeader');
menuHamburger.addEventListener("click", toggleOn); 

function toggleOn() {
    navbarHeader.classList.toggle("collapse");
};

//  Fonctionnalité 3

let myEditButton = document.getElementsByClassName('btn btn-sm btn-outline-secondary')[0];


myEditButton.addEventListener('click', putRedText);

function putRedText() {
    let cardChange = document.querySelector('p.card-text');
    cardChange.style.color = 'red';
}

//  Fonctionnalité 4

var secondEditButton = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];

var onMouseClickSecondEdit = function () {
  var x = document.getElementsByClassName("card-text")[1];
  if (x.style[0] === "color") {
    x.style = " "}
  else {
    x.style = "color : Green";} 
}

secondEditButton.addEventListener("click", onMouseClickSecondEdit, false);



//  Fonctionnalité 5