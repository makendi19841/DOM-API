/* const header      = document.querySelector(".header");
header.style.backgroundColor = "#333";  // Change header background color

console.log('Header element:', header);  // Log the header element to the console
console.log('Header background color:', header.style.backgroundColor);  // Log the background color to the console */


const body = document.body;
const section = document.section;

const container = document.getElementsByClassName('hero-content');
console.log(container);


// select the h1 Elements and  log to console
const h1Element = document.getElementsByTagName('h1');
console.log(h1Element);



// select all the a element inside the .nav-list
const navItems = document.getElementsByClassName('nav-item');
console.log(navItems);


// Select the .btn element and log it to the console.
const btnElement = document.getElementsByClassName('btn');
console.log(btnElement);

// Modify Styles
// Change the background color of the .header element to #b5651d
const header = document.querySelector(".header");
header.style.background = "#b5651d";

// Change the font size of the h1 element inside the .hero-content div to 3rem.
const heading = document.querySelector(".hero-content h1");
heading.style.fontSize = "3rem";
/* heading.style.color = "yellow";
 */
// Change the text color of all a elements inside the .nav-list to #faf0e6.
const allNavItems = document.querySelectorAll(".nav-list a");
allNavItems.forEach((item) => {
    item.style.color = "white"   ;
});

// add content
// Select the .hero-content div and add a new p elelemnt with the text "Open daily from 7 AM to 9 PM.

const heroContent = document.querySelector(".hero-content"); // identify the parent element where to insert new paragraph
console.log(heroContent);
const newParagraph = document.createElement("p"); // create a new p element
newParagraph.textContent = "Open daily from 7 AM to 9 PM.";
console.log(newParagraph);
heroContent.appendChild(newParagraph);

