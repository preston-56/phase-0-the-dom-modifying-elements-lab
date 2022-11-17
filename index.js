// Removes the childElement 
const bodyElement = document.querySelector('body'); 
const parentElement = document.getElementById("main"); 
const childElement = bodyElement.removeChild(parentElement);

// appendChild
const newHeader = document.body.appendChild(document.createElement('h1'));

// set id attribute

newHeader.setAttribute('id', 'victory');

// textContent
newHeader.textContent = "Preston is the champion";   