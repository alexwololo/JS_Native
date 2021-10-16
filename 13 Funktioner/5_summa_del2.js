// Uppgift: Summa: Del 1
// Instruktioner
// Skapa en variabel, sum, och tilldela en funktion till denna.

// Funktionen ska ta emot en array, som kan antas innehålla nummer. Funktionen ska också summera värdena i array:en, och returnera summan.

// Koden…

// let numbers = [1, 2, 3]
// console.log(sum(numbers))
// … eller console.log(sum([1, 2, 3])), ska göra så att “6” loggas till webbläsarens konsol, eftersom 1 + 2 + 3 = 6.

// På samma sätt ska sum([1, 2, 3, 4]) returnera 10, eftersom 1 + 2 + 3 + 4 = 10.

// Utgå gärna, inuti funktionen, från en variabel som tilldelas numret 0, för att sedan addera talen i array:en i en loop, till exempel så här:

// let sum = function (a) {
//   let result = 0

//   for(...) {
//     // ...
//   }

//   return result
// }
// Ladda upp index.js.

// Ladda upp din lösning   console.log("sum(2, 30) SUM is ",sum(2, 30)) ;

console.log(" sum(2, 2,33) SUM is ", sum(2, 2, 33));

function sum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    //arguments is a array of value passed to this function
    sum += arguments[i];
  }
  return sum;
}