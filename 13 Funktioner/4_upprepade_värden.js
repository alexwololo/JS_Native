// Uppgift: Upprepade värden
// Instruktioner
// Skapa en variabel, repeat, och tilldela en funktion till denna.

// Funktionen ska ta emot två argument, där det andra argumentet kan antas vara ett heltal av typen number.

// Funktionen ska returnera en array med lika många värden som heltalet. De enda värdena som array:en får innehålla är värden som är identiska med värdet i den första parametern.

// repeat('test', 3) ska returnera en array lik ['test', 'test', 'test'].

// Använd en loop.

// Ladda upp index.js.

// Ladda upp din lösning


//skapa funktion
//använd en loop för att iterera tester



let repeat = function (string, num) {
 return (string, num)


}
// should return an array like ['test', 'test', 'test']
repeat('test', 3)



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
