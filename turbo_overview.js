/**
 * IF
 * if kör kodblocket noll eller en gång
 */
let age = prompt('age?')
if (age < 1) {
  alert('u r a babie');
} else if (age < 15) {
  alert('u are a kid')
} else {
  alert('u are an adult')
}

/**
 * SWITCH
 * När man undersöker värdet av ett uttryck
 */
let age = prompt('are u a Babie, Kid or Adult?')
switch (age) {
  case 'Babie':
    alert('u r 0-1 yo');
    break
  case 'Kid':
    alert('u r 1-15 yo');
    break
  case 'Adult':
    alert('u r above 18 yo');
    break
  default:
    alert('u answered wo capital letter')
}

/**
 * WHILE
 * Låta kod köra noll, en eller fler gånger, beroende på om något är sant eller falskt.
while och for är kontrollstrukturer som kan användas för att köra kod så länge ett uttryck är true.
 *
 * DO WHILE
 * Låta kod köra en eller fler gånger, beroende på om något är sant eller falskt.
do...while är en kontrollstruktur som liknar while, som kan användas för att köra kod så länge ett uttryck är true, men minst en gång.
 */
let age = 0;
while (age < 1) {
  alert('babie')
  age++
}

let age
do {
  age = prompt('Enter age')
} while (age === null)
alert('Your age is ' + age);

/**
 * FOR
 * for kan vara en “kompakt” ersättning till vissa typer av while-användningar
 * någonting man gör innan man börjar loopa (let number = 0),
 * ett upprepat test (number < 3),
 * och någonting som man gör i slutet av varje iteration (number++) – är så vanligt att det finns en kortform för det: for.
 *
 * https://www.youtube.com/watch?v=s9wW2PpJsmQ
 */
for (let age = 0; age < 15; age++) {
  console.log(age);
}

/**
 * FUNCTIONS
 */


let f = function (name, lastName) {
  console.log(name + lastName)
  return name + lastName
}
f('John ', 'Cena');
////////////////////////////////

let add = function (a, b) {
  return a + b
}
let value = add(2, 3)
console.log(value) // 5
///////////////////////////////

let add = function (a, b) {
  return a + b
}
console.log(add(2, 3))
