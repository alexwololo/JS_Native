// Uppgift: Arrow-funktioner: Del 3
// Instruktioner
// Skapa en arrow-funktion, f, som tar emot en parameter och returnerar en singleton-array med detta värde. En singleton-array är en array som endast innehåller ett värde.

// Använd inte nyckelordet return, (- och )-parenteser, eller någon annan överflödig kod, i arrow-funktionen (förutom mellanslag, radbrytningar, tab-tecken eller liknande).

// Format on Save-funktionaliteten i Code kan behövas stängas av under tiden som den här uppgiften arbetas på, eftersom denna kan lägga till överflödiga parenteser ibland.

// Ladda upp index.js.

// Ladda upp din lösning


let f = function (x = []) {

  return 0
}
f(1);

function f(x = []) {

  return x
}
f(1);


//ta bort function + {} + return & lägg till =>
let f = (x = []) => x;
f(1);

let f = x => [x]
f(1);
