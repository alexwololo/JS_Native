// Uppgift: Arrow-funktioner: Del 4 (VG)
// Instruktioner
// Skapa en arrow-funktion, f, som tar emot två parametrar och returnerar ett objekt. Låt objektet som returneras innehålla två nycklar, k och l, där k-nyckeln är associerat med det första parametervärdet, och l-nyckeln är associerat med det andra parameter-värdet.

// Använd inga överflödiga funktionsanrop, tilldelningar, eller nyckelordet return.

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


let f = x => [x]
f(1);


function f(x, y) {

  let obj = {
    k: x,
    l: y
  };
  return obj;
}
let randomvar = f('a', 'd');
console.log(randomvar);


let f = (x, y) => obj = {k:x, l:y};
let randomvar = f('a', 'd');
console.log(randomvar);


let f = (x, y) => obj = { k: x, l: y };
let randomvar = f('a', 'd');
console.log(randomvar);


let f = (x,y) => ({k:x,l:y})
let randomvar = f('a','b')
