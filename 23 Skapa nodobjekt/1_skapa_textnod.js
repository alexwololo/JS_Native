// Uppgift: Skapa en textnod
// Instruktioner
// Använd document.createTextNode för att skapa en textnod, och lägg till textnoden i body - elementet med appendChild.

// Noden ska innehålla texten“ Hello World!”.

// Tips: Om en variabel / konstant node innehåller en nod, så kan noden läggas till i body - elementet med document.body.appendChild(node).

// Din lösning

/**
 <!DOCTYPE html>
<html lang="sv">
  <head>
    <meta charset="utf-8">
    <title>Skapa en textnod</title>
  </head>
  <body>
    <script src="index.js"></script>
  </body>
</html>
 */

//

let text = document.createTextNode('Hello World!')
document.body.appendChild(text)