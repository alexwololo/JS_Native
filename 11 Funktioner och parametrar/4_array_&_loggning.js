// Uppgift: Array-längd och loggning till konsolen
// Instruktioner
// Skapa en variabel/konstant, logLength, och tilldela en funktion till logLength.

// Funktionen ska ta emot en parameter, som kan antas innehålla en array, och logga hur många värden denna array innehåller i webbläsarens konsol.

// logLength([1, 2, 3]) ska göra så att “3” loggas till konsolen (eftersom att array:en som skickas in som ett argument innehåller tre värden).

// Notera att ett array-värde kan tas emot på samma sätt som vilket annat värde som helst, och att inga hakparenteser eller kommatecken behöver ingå mellan funktionsparenteserna:

// const logLength = function (a) {
//   // ...
// }
// Ladda upp index.js.

// Ladda upp din lösning

const logLength = function (arr) {
  console.log(arr.length);
}

logLength([1, 2, 3])
