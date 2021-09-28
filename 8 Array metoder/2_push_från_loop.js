// Uppgift: push från en loop
// Instruktioner
// Utgå från en variabel/konstant numbers och tilldela en tom array ([]) till denna.

// Använd en loop i kombination med en variabel och push-instruktionen för att lägga till de 13 number-värdena 1, 2, 3, och så vidare, upp till 13, till denna array.

// numbers ska alltså motsvara [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] när loopen har kört klart.

// Använd push-instruktionen inuti loopen för att lägga till värden i array:en, och lägg till ett värde i array:en per iteration.

// Informationen från…

// console.log(numbers) // Ska logga en array med numren 1-13
// console.log(numbers[0]) // Ska logga “1”
// console.log(numbers.length) // Ska logga “13”
// … kan underlätta.

// Ladda upp index.js.

// Ladda upp din lösning


let numbers = [];

for (let i = 1; i < 14; i++) {
  numbers.push(+i)
}

console.log(numbers);
console.log(numbers) // Ska logga en array med numren 1-13
console.log(numbers[0]) // Ska logga “1”
console.log(numbers.length) // Ska logga “13”
