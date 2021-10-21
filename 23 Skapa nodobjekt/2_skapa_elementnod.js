// Uppgift: Skapa en elementnod
// Instruktioner
// Anpassa lösningen på den föregående uppgiften.Kraven från den föregående uppgiften ska förbli uppfyllda.

// Använd document.createElement för att skapa ett h1 - elementnod, och lägg till elementnoden body - elementet med appendChild.

// Textnoden som skapades i den föregående uppgiften ska inte läggas till direkt i body - elementet, utan ska istället läggas till i h1.

// Följaktligen ska HTML - strukturen < h1 > Hello World! < /h1> skapas och injiceras i body-elementet, men med createElement-, createTextNode- och appendChild-funktionerna.

// Tips: Om en variabel / konstant parent innehåller en elementnod, och en variabel / konstant child innehåller en annan nod, så kan barnnoden läggas till i föräldernoden via parent.appendChild(child).
/**
 <!DOCTYPE html>
  <html lang="sv">
    <head>
      <meta charset="utf-8">
      <title>Skapa en elementnod</title>
    </head>
    <body>
      <script src="index.js"></script>
    </body>
  </html>
 */
// Din lösning


let node = document.createElement('h1')
let text = document.createTextNode('Hello World!')
document.body.appendChild(node)
node.appendChild(text)