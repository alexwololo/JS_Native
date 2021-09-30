// Uppgift: Ett returvärde
// Instruktioner
// Skapa en variabel/konstant, greeting, och tilldela en funktion till greeting.

// Funktionen ska returnera strängen 'Hello World!'.

// greeting ska vara implementerad på ett sådant sätt att koden…

// let s = greeting()
// alert(s)
// … eller alert(greeting()), gör så att en dialogruta med texten “Hello World!” visas.

// Funktionen behöver inte ha några parametrar (ta emot några värden/argument).

// Funktionen kan testas med console.log(greeting()).

// Ladda upp index.js.

// Ladda upp din lösning

//Function Declaration
const greeting = function () {
  return 'Hello World!'
}
console.log(greeting())


//Function Expression
function greeting() {
  return 'Hello World!'
}
console.log(greeting());


//Immidiatley Invokable Function Expression or IIFE
(function(){
  console.log('Hello World');
})();
