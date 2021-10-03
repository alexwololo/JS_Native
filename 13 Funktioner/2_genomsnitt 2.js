// Uppgift: Genomsnitt
// Instruktioner
// Skapa en variabel, average, och tilldela en funktion till denna.

// Funktionen ska ta emot en array, som kan antas innehålla nummer. Funktionen ska räkna ut genomsnittet på numren i array:en, och returnera detta.

// Ett genomsnitt kan räknas ut genom att summera alla tal, och sedan använda division.

// Koden…

// let numbers = [1, 2, 3]
// console.log(average(numbers))
// … eller console.log(average([1, 2, 3])), ska göra så att “2” loggas till webbläsarens konsol, eftersom (1 + 2 + 3) / 3 = 2.

// På samma sätt ska average([1, 2, 3, 4]) returnera 2.5, eftersom (1 + 2 + 3 + 4) / 4 = 2,5.

// Om en tom array skickas in som ett argument, så ska null returneras. average([]) ska alltså returnera null. Använd gärna en if-sats i funktionen, för att hantera detta fall. Funktioner kan ha fler än en return-sats, och funktionen avslutas när den första körs.

// Ladda upp index.js.

// Ladda upp din lösning

//https://stackoverflow.com/questions/62053197/returning-null-from-an-empty-array
//https://www.youtube.com/watch?v=uibEcNmGCi8

// let a = (1+2+3) / 3;
// console.log(a);

let average = function (array) {

  //check if array is empty
  // if empty then average([]) returns null, use if statement.
  if (average.length === [])
    return null;

  //sum values from array
  const reducer = function (total, currentValue) {
    return total + currentValue;
  };
  const sum = array.reduce(reducer)

  //get length of array
  //divide the array sum by the length
  return sum / array.length;

}
let numbers = [];
console.log(average(numbers));
numbers = [1, 2, 3];
console.log(average(numbers));
