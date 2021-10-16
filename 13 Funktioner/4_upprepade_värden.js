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




const repeat = function(str, nmbr) {
  let data = [];
  for (let i = 0; i < nmbr; i++) {
    data.push(str);
  }
  return data;
};
//or

const repeat = function(str, nmbr) {
  let data = [];
  for (let i = 0; i < nmbr; i++) {
    data.push(str);
  }
  return data;
};
repeat('test', 3);
console.log("repeat  ", repeat)