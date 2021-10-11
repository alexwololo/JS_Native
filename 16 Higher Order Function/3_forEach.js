// Uppgift: forEach
// Instruktioner
// Implementera en funktion, forEach, som tar två argument: en array och en funktion.

//   forEach - funktionen ska loopa igenom array: en(till exempel a) och anropa funktionen som skickades in som argument(till exempel g) en gång för varje värde i array: en.

// function forEach(a, f) {
//   // ...
// }

// forEach([1, 2, 3], alert)
// … ska till exempel visa tre dialogrutor(innehållandes “1”, “2” och “3”).

//   forEach([4, 5], prompt) ska visa två prompt - dialogrutor(innehållandes “4” och “5”).

// Använd inte den i JavaScript inbyggda forEach - funktionen.

// Ladda upp index.js.

//   Tips: Ersätt kommentaren i koden ovan så att forEach - funktionen loopar igenom a, anropar f(med parenteser), och skickar in varje a - värde(en gång) till f.

// Ladda upp din lösning

function forEach(a, f) {
  for (let i = 0; i < a.length; i++) {
    f(a[i]);
  }

}
function f(ele) { console.log(ele) }
forEach([1, 2, 3], alert)


//ELLER

function forEach(a, f) {
  for (let i = 0; i < a.length; i++) {
  f(a[i])
  }
}
function f(ele) { console.log(ele) }
forEach([1, 2, 3], alert)
