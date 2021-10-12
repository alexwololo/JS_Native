// Uppgift: En array baklänges
// Instruktioner
// Skapa en variabel, reverse, och tilldela en funktion till denna.

// Funktionen ska ta emot en array. Funktionen ska skapa en ny array, och lägga till värdena som finns i array:en som den tar emot, men i omvänd ordning.

// Koden…

// let numbers = [1, 2, 3]
// console.log(reverse(numbers))
// … eller console.log(reverse([1, 2, 3])), ska göra så att “[3, 2, 1]” loggas till webbläsarens konsol.

// Använd en loop. Använd inte den “inbyggda” Array-metoden reverse.

// Ladda upp index.js.

// Ladda upp din lösning

// let numbers = [1, 2, 3]
// for (i = 0; i < numbers.length; i++) {
//   console.log(names[i]);
// }

// let numbers = [1, 2, 3]
// for (let i = numbers.length - 1; i >= 0; i--) {
//   console.log(numbers[i]);
// }

//https://www.codegrepper.com/code-examples/javascript/javascript+loop+backwards
//https://josephcardillo.medium.com/how-to-reverse-arrays-in-javascript-without-using-reverse-ae995904efbe

// 1) I want to take the last element of the array, then add it to the newArray.
// 2) To do this I'll need to loop through the array from the end to the beginning, because I want the last element to be first.
// 3) I want to output the contents of 'newArray' when the for loop is finished.

let reverse = function () {
  let numbers = [1, 2, 3]
  for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
  }
}
let numbers = [1, 2, 3]
console.log(reverse(numbers))
console.log(reverse([1, 2, 3]))


//LÖSNINGEN HÄR:
function reverse(arr) {
  let newArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
}
let numbers = [1, 2, 3]
console.log(reverse(numbers))
console.log(reverse([1, 2, 3]))
