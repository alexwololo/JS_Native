// Uppgift: Städer (VG)
// Instruktioner
// Skriv kod som (med fetch) hämtar städerna från https://avancera.app/cities/ och spara dessa i localStorage så att de är tillgängliga i array-form via JSON.parse(localStorage.getItem('cities')).

// Din lösning


// <!DOCTYPE html>
// <html lang="sv">
//   <head>
//     <meta charset="utf-8">
//     <title>Städer (VG)</title>
//   </head>
//   <body>
//     <script src="index.js"></script>
//   </body>
// </html>


let form = document.getElementById("form");
let name = document.querySelector("#name");
let send = document.querySelector("#send");
let greet = document.querySelector("#greeting");
let errors = document.querySelector("#errors");
let button = document.querySelector("#send");
let error1 = document.querySelector("#name-error");
let error2 = document.querySelector("#consent-error");
let box = document.querySelector("#consent");

function k() {
  let namnet = document.getElementById("name").value;
  greet.textContent = "Hej " + namnet + "!";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  k();
});

button.disabled = true;
document.getElementById("errors").style.display = "block";

function t() {
  if (box.checked !== true && name.value === "") {
    greet.textContent = "";
    button.disabled = true;
    document.getElementById("errors").style.display = "block";
    document.getElementById("consent-error").style.display = "list-item";
    document.getElementById("name-error").style.display = "list-item";
  } else if (box.checked === true && name.value === "") {
    greet.textContent = "";
    button.disabled = true;
    document.getElementById("errors").style.display = "block";
    document.getElementById("consent-error").style.display = "none";
    document.getElementById("name-error").style.display = "list-item";
  } else if (box.checked !== true && name.value !== "") {
    greet.textContent = "";
    button.disabled = true;
    document.getElementById("errors").style.display = "block";
    document.getElementById("name-error").style.display = "none";
    document.getElementById("consent-error").style.display = "list-item";
  } else {
    button.disabled = false;
    document.getElementById("errors").style.display = "none";
    document.getElementById("name-error").style.display = "none";
    document.getElementById("consent-error").style.display = "none";
    // function k() {
    //   let namnet = document.getElementById("name").value;
    //   greet.textContent = "Hej " + namnet + "!";
    // }
    // send.addEventListener("click", k);
  }
}

name.addEventListener("input", t);
box.addEventListener("change", t);


// OR


let form = document.getElementById("form");
let name = document.getElementById("name");
let send = document.getElementById("send");
let greet = document.getElementById("greeting");
let errors = document.getElementById("errors");
let error1 = document.getElementById("name-error");
let error2 = document.getElementById("consent-error");
let box = document.getElementById("consent");

function displayGreetings() {
  let namnet = document.getElementById("name").value;
  greet.textContent = "Hej " + namnet + "!";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  displayGreetings();
});

send.disabled = true;
errors.style.display = "block";

function validate() {
  if (!box.checked && !name.value.trim()) {
    greet.textContent = "";
    send.disabled = true;
    errors.style.display = "block";
    error2.style.display = "list-item";
    error1.style.display = "list-item";
  } else if (box.checked && !name.value.trim()) {
    greet.textContent = "";
    send.disabled = true;
    errors.style.display = "block";
    error2.style.display = "none";
    error1.style.display = "list-item";
  } else if (!box.checked && name.value.trim()) {
    greet.textContent = "";
    send.disabled = true;
    errors.style.display = "block";
    error1.style.display = "none";
    error2.style.display = "list-item";
  } else {
    send.disabled = false;
    errors.style.display = "none";
    error1.style.display = "none";
    error2.style.display = "none";
  }
}

name.addEventListener("input", validate);
box.addEventListener("change", validate);
