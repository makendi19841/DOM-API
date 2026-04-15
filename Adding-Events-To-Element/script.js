const body = document.body;

const btnAdd = document.getElementById("add-item-btn");
const btnAlert = document.getElementById("alert-btn");
const btnConsole = document.getElementById("console-btn");


const arrTasks = [
  "What is the capital of France?",
  "Who is the current president of the United States?",
  "What is the largest mammal in the world?",
  "How many continents are there on Earth?",
  "What is the chemical symbol for gold?",
  "Who wrote the play 'Romeo and Juliet'?",
  "What is the tallest mountain in the world?",
  "What is the currency of Japan?",
  "Who painted the Mona Lisa?",
  "What is the smallest country in the world?",
  "What is the largest desert in the world?",
  "Who is the founder of Microsoft?",
  "What is the longest river in the world?",
  "What is the chemical symbol for water?",
  "Who is the author of 'Harry Potter'?",
  "What is the largest ocean on Earth?",
  "What is the currency of the United Kingdom?",
  "Who painted 'The Starry Night'?",
  "What is the smallest planet in our solar system?",
  "What is the largest volcano in the world?"
];

const arrAlerts = [
  "The sky is blue.",
  "Water is wet.",
  "The Earth revolves around the Sun.",
  "Fire is hot.",
  "Grass is green.",
  "The moon orbits the Earth.",
  "Fish live in water.",
  "Birds can fly.",
  "The sun rises in the east.",
  "Snow is cold."
];

//-------------------------------------
// Add event listeners to buttons
//-------------------------------------
btnAdd.addEventListener("click", () => {

  const newLi = document.createElement("li");
  newLi.textContent = arrTasks[Math.floor(Math.random() * arrTasks.length)];
  document.getElementById("item-list").appendChild(newLi);

  // ensure that the scroll to the last task is always visible
  newLi.scrollIntoView({behavior: "smooth", block: "end"});

});


btnAlert.addEventListener("click", () => {
  alert(arrAlerts[Math.floor(Math.random() * arrAlerts.length)]);
});

btnConsole.addEventListener("click", () => {
  console.log(arrTasks[Math.floor(Math.random() * arrTasks.length)]);
});



/* //-------------------------------------
// add onclick attribute to buttons
//-------------------------------------
btnAdd.onclick = () => {
  const newLi = document.createElement("li");
  newLi.textContent = arrTasks[Math.floor(Math.random() * arrTasks.length)];
  document.getElementById("item-list").appendChild(newLi);
};

btnAlert.onclick = () => {
  alert(arrAlerts[Math.floor(Math.random() * arrAlerts.length)]);
};

btnConsole.onclick = () => {
  console.log(arrTasks[Math.floor(Math.random() * arrTasks.length)]);
}; */