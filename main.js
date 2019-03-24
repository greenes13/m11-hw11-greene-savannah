//Global Varibales
const myBoxes = document.getElementsByClassName('block');

//The Functionality
function loopThrough() {

  const changeColor = () => this.classList.toggle('red');

  for (let i = 0; i < this.textContent.length; i ++) {

};

//The Event Listener
for (let i = 0; i < myBoxes.length; i++) {
  myBoxes[i].addEventListener('click', loopThrough);
};


//NOTES
// ES6 syntax uses const and let instead of var
// function declaration in global scope
//"let" defines initialization
// event listener listens for 'click' and runs function 'loopthrough'
//function defined using const and for loop using let initiating the fucntion
