// Uppgift: Slå upp ett värde från ett objekt (VG)
// Instruktioner
// Skapa en variabel/konstant, lookup, och tilldela en funktion till lookup.

// Funktionen ska ta emot två parametrar: ett objekt och en sträng. Funktionen ska sedan logga värdet associerat med nyckeln som representeras av strängen.

// lookup({ a: 1, b: 2, c: 3 }, 'b') ska göra så att “2” loggas till konsolen (eftersom att b-nyckeln innehåller värdet 2).

// Ladda upp index.js.

// Ladda upp din lösning b[1]

//om jag känner till egenskapens namn använder jag punktnotation.

//om jag inte vet eller vill ha dynamisk användning så använder jag hakparantes

const lookup = function (obj, str) {
  console.log(obj[str]);
}

lookup({ a: 1, b: 2, c: 3 }, 'b');
