// Uppgift: Object.assign (VG)
// Instruktioner
// Skapa en konstant/variabel o, och tilldela ett objekt till o sådant att o.hasOwnProperty('a') utvärderas till false, och Object.values(Object.assign(o, { a : 1 }, { b: 2 })).length === 5 utvärderas till true.

// Ladda upp index.js.

// Ladda upp din lösning


// let o = {};
// o.o = 'b';
// console.log(o.hasOwnProperty('o'));
// console.log(o);

// o.a = 1;
// o.b = 2;
// console.log(o);

// let x = Object.keys(o).length === 5;
// console.log(x);

// let o = {};
// o.o = 'notA';
// console.log(o.hasOwnProperty('o'));
// console.log(o);

// const target = { c: 3, d: 4 };
// const o = { o: 'notA', a: 1, b: 2 };
// const returnedTarget = Object.assign(target, o);
// let x = Object.keys(target).length === 5;
// console.log(x);
// console.log(o.hasOwnProperty('o'));
// console.log(target);
// console.log(returnedTarget);

// let o = {
//   x: "x",
//   y: "y",
//   z: "z",
// };
// console.log(o.hasOwnProperty("a"));
//Jons correctChecker köra alla komandon därför behövs inte kodraden nedan
// console.log(Object.values(Object.assign(o, { a: 1 }, { b: 2 })).length === 5);

// let o = {
//   x: "x",
//   y: "y",
//   z: "z",
// };
// console.log(o.hasOwnProperty("a"));

//Jons correctChecker köra alla komandon

let o = {
  x: "x",
  y: "y",
  z: "z",
};
