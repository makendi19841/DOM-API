const body = document.body;

// Create the HTML Structure
const header = document.createElement("header");
const nav = document.createElement("nav");
const a = document.createElement("a");
a.href = "#";
a.className = "logo";
a.textContent = "Coffee Shop";

const ul = document.createElement("ul");
ul.className= "nav-list";

const li1 = document.createElement("li");
li1.className = "nav-item";
const a1 = document.createElement("a");
a1.href = "#";
a1.textContent = "Home";
li1.appendChild(a1);

const li2 = document.createElement("li");
li2.className = "nav-item";
const a2 = document.createElement("a");
a2.href = "#";
a2.textContent = "Menu";
li2.appendChild(a2);

const li3 = document.createElement("li");
li3.className = "nav-item";
const a3 = document.createElement("a");
a3.href = "#";
a3.textContent = "Contact";
li3.appendChild(a3);

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);


nav.appendChild(a);
nav.appendChild(ul);
header.appendChild(nav);
body.appendChild(header);


// Create the Hero Section
const sectionHero = document.createElement("section");
sectionHero.className = "hero";

const divHero = document.createElement("div");
divHero.className = "hero-content";

const h1 = document.createElement("h1");
h1.textContent = "Welcome to Our Coffee Shop!";
divHero.appendChild(h1);

const p = document.createElement("p");
p.textContent = "Enjoy the best coffe in town.";
divHero.appendChild(p);

const aHero = document.createElement("a");
aHero.href = "#";
aHero.className = "btn";
aHero.textContent = "Explore Menu";
divHero.appendChild(aHero);

sectionHero.appendChild(divHero);
body.appendChild(sectionHero);

// create the footer
const footer = document.createElement("footer");
footer.className = "footer";
const pFooter = document.createElement("p");
pFooter.textContent = "© 2024 Coffee Shop. All rights reserved.";
footer.appendChild(pFooter);
body.appendChild(footer);



// Apply CSS Styles Using JavaScript
header.style.backgroundColor = "#fff";
header.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
header.style.padding = "1rem 0";

nav.style.display = "flex";
nav.style.justifyContent = "space-between";
nav.style.alignItems = "center";
nav.style.maxWidth = "1200px";
nav.style.padding = "0 1rem";
nav.style.margin = "0 auto";


a.style.fontSize = "1.5rem";
a.style.fontWeight = "bold";
a.style.color = "#333";
a.style.textDecoration = "none";

ul.style.listStyle = "none";
ul.style.display = "flex";
ul.style.gap = "1rem";


li1.style.marginLeft = "1rem";
li2.style.marginLeft = "1rem";
li3.style.marginLeft = "1rem";

a1.style.color = "#333";
a1.style.textDecoration = "none";
a1.style.fontWeight = "bold";

a2.style.color = "#333";
a2.style.textDecoration = "none";
a2.style.fontWeight = "bold";

a3.style.color = "#333";
a3.style.textDecoration = "none";
a3.style.fontWeight = "bold";

sectionHero.style.height = "560px";
sectionHero.style.backgroundImage = "url('https://images.pexels.com/photos/2907301/pexels-photo-2907301.jpeg?auto=compress&cs=tinysrgb&w=640&h=853&dpr=1')";
sectionHero.style.backgroundSize = "cover";
sectionHero.style.backgroundColor = "#fff";
sectionHero.style.backgroundRepeat = "no-repeat";
sectionHero.style.backgroundPosition = "center center";


divHero.style.maxWidth = "600px";
divHero.style.height = "100%";
divHero.style.display = "flex";
divHero.style.flexDirection = "column";
divHero.style.justifyContent = "space-around";
divHero.style.alignItems = "center";
divHero.style.textAlign = "center";


h1.style.fontSize = "2.5rem";
h1.style.marginBottom = "1rem";

p.style.fontSize = "1.2rem";
p.style.marginBottom = "2rem";

aHero.style.backgroundColor = "#333";
aHero.style.color = "#fff";
aHero.style.padding = "0.75rem 1.5rem";
aHero.style.textDecoration = "none";
aHero.style.borderRadius = "5px";
aHero.style.transition = "background-color 0.3s ease";
aHero.style.hover = "background-color: #555";

footer.style.backgroundColor = "#333";
footer.style.color = "#fff";
footer.style.textAlign = "center";
footer.style.padding = "1rem 0";