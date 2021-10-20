// Uppgift: Två äldre åtkomstmetoder
// Instruktioner
// Anpassa lösningen på den föregående uppgiften. Kraven från den föregående uppgiften ska förbli uppfyllda.

// Använd dock document.getElementById och document.getElementsByTagName istället för document.querySelector och document.querySelectorAll.

/*
<!DOCTYPE html>
<html lang="sv">
  <head>
    <meta charset="utf-8">
    <title>Två äldre åtkomstmetoder</title>
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
  document.getElementById('players')

const items = document.getElementsByTagName('li')