// Uppgift: En funktionsdeklaration
// Instruktioner
// Skapa en funktion som kan anropas via greeting().

// Funktionen ska returnera strängen 'Hello World!'. Funktionen ska gå att anropa innan/ovanför sin definition, utöver att gå att anropa efter/under sin definition.

// Ladda upp index.js.

// Ladda upp din lösning


// function greeting(x) {
//   console.log(x)
// }
// greeting('Hello World!');

let greeting = function() {
  return ('Hello World!')
}
greeting();


function greeting() {
  return ('Hello World!')
}
greeting();

//ta bort function + {} + return & lägg till =>
let greeting = () => 'Hello World!';
greeting();
