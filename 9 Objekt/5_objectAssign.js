// Uppgift: Object.assign (VG)
// Instruktioner
// Skapa en konstant/variabel o, och tilldela ett objekt till o sådant att o.hasOwnProperty('a') utvärderas till false, och Object.values(Object.assign(o, { a : 1 }, { b: 2 })).length === 5 utvärderas till true.

// Ladda upp index.js.

// Ladda upp din lösning


let o = {};
o.o = 'a';
console.log(o.hasOwnProperty('hasOwnProperty'));
console.log(o);

o.a = 1;
o.b = 2;
o.c = 3;
o.d = 4;
console.log(o);


let x = Object.keys(o).length === 5;
console.log(x);
