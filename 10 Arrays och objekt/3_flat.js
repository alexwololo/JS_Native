// Uppgift: flat
// Instruktioner
// Skapa en variabel/konstant a, och tilldela en array till a sådan att…

// a.length === 2 utvärderas till true,
// a[0].length === 1 utvärderas till true, och
// a.flat() utvärderas till en array med ett innehåll motsvarande ['a', 'b', 'c'].
// Ladda upp index.js.

// Ladda upp din lösning

const a = [
  ['a'],
  ['b', 'c']
]

let a1 = a;
let a2 = a;
console.log(a1.length);
console.log(a2.length);

let arr = a.flat(1);
console.log(arr);
