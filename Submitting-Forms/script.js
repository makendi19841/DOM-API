const form = document.getElementById("contact-form");
const output = document.getElementById("output");


form.addEventListener("submit", (event) => {
    // Prevent page refresh 
    event.preventDefault();
    console.log("Form submitted!");

    // Capture form data after user submits the form
    const formData = new FormData(form);


    // extract raw values
    const rawName = formData.get("name");
    const rawEmail = formData.get("email");
    const rawMessage = formData.get("message");

    // preprocess (trim - lowercase): 
    // .trim() removes whitespace (spaces, tabs, newlines) from both ends of a string.
    const name    = rawName.trim().toLowerCase();
    const email   = rawEmail.trim().toLowerCase();
    const message = rawMessage.trim().toLowerCase();

    output.innerHTML = ""; // Clear previous output
    output.style.backgroundColor = ""; // Reset background color
    output.style.animation = ""; // Reset animation
    

    if (name && email && message) {
        console.log("✅ All fields are filled!");
        console.log(name, email, message);

        const ul = document.createElement("ul");
        const liName = document.createElement("li");
        const liEmail = document.createElement("li");
        const liMessage = document.createElement("li");

        liName.textContent = `Name: ${name}`;
        liEmail.textContent = `Email: ${email}`;
        liMessage.textContent = `Message: ${message}`;

        ul.appendChild(liName);
        ul.appendChild(liEmail);
        ul.appendChild(liMessage);


        output.style.backgroundColor = "lightgreen"; // light green background
        output.style.color = "#fff";
        output.appendChild(ul);

        form.reset(); // Clear form fields after successful submission

    } else {
        /* console.log("❌ Some fields are empty!"); */
        output.textContent = "❌ Please fill in all fields!";
        output.style.backgroundColor = "red"; // light red background
        output.style.color = "#fff";
        output.style.animation = "shake 0.5s"; // Add shake animation

    }




});

