// Uppgift: En funktion som returvärde
// Instruktioner
// Skapa en variabel, f, och tilldela en funktion till denna.

// Funktionen ska returnera en funktion, som i sin tur returnerar 'Hello World!'.

// Koden…

// let g = f()
// console.log(typeof g) // function
// console.log(g()) // Hello World!
// … eller…

// console.log(f()()) // Hello World!
// … ska göra så att “Hello World!” loggas till webbläsarens konsol.

// Parenteser gör som sagt så att funktioner anropas.

// Tips: Skapa först en funktion som returnerar strängen, och skapa sedan en funktion som returnerar funktionen som returnerar strängen.

// Ladda upp index.js.

// Ladda upp din lösning





// function expression
let f = function myFunction() {
  return 'Hello World';
}
console.log(f);

//function declaration
function myFunction() {
  return 'Hello World';
}
let f = myFunction('Hello World!')
console.log(f);

//arrowfunction
let myFunction = () => 'Hello World';
console.log(f);





let g = f()
console.log(typeof g) // function
console.log(g()) // Hello World!
console.log(f()()) // Hello World!



function g() {
  function f() {
    return ('Hello World!');
  }
}



function g() {
  return function f() {
    console.log('Hello World!');
  }
}
let myFunction = g();
myFunction()



function f() {
  function g() {
    return (g);
  }
}

//lösning
let g = f()
console.log(typeof g) // function
console.log(g()) // Hello World!
console.log(f()()) // Hello World!

function f() {
  let g = () => 'Hello World!'
  return (g);
};
