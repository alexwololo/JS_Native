// Uppgift: document.querySelectorAll
// Instruktioner
// Anpassa lösningen på den föregående uppgiften. Kraven från den föregående uppgiften ska förbli uppfyllda.

// Skapa ytterligare en variabel/konstant, items, och tilldela denna ett “array-like”-värde som innehåller tre elementobjekt: ett för varje li-element i den tillhandahållna HTML-strukturen.

// Använd document.querySelectorAll (för loggningen av section-elementet) och document.querySelectorAll (för loggningen av “array-like”-värdet).

// Använd inte document.getElementById, document.getElementsByClassName eller document.getElementsByTagName.

// Din lösning

/*
<!DOCTYPE html>
<html lang="sv">
  <head>
    <meta charset="utf-8">
    <title>document.querySelector</title>
  </head>
  <body>
    <section id="players">
      <h1>Spelare</h1>
      <ol>
        <li>Alice</li>
        <li>Bob</li>
        <li>Cesar</li>
      </ol>
    </section>
    <script src="index.js"></script>
  </body>
</html>
*/

const item =
  document.querySelector('#players')


const items = document.querySelectorAll('li')