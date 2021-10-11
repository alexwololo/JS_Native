// Uppgift: En funktionsparameter
// Instruktioner
// Skapa en variabel, call, och tilldela en funktion till denna.

// Funktionen ska ta emot en parameter, som kan antas vara en funktion, och anropa funktionen som finns i denna parameter.

// Till exempel så ska call(alert) ska göra så att en alert-dialogruta visas, och call(prompt) ska göra så att en prompt-dialogruta visas.

// Tips: En om en variabel/parameter f innehåller en funktion, så kan f anropas med parenteser, så här: f().

// Ladda upp index.js.

// Ladda upp din lösning


// function expression
let call = function f(g) {
  g()
}
f(alert)

//function declaration
let call = f
function f(g) {
  g()
}
f(alert);

//arrowfunction
let f = (g) => g();
f(alert);
let call = f

