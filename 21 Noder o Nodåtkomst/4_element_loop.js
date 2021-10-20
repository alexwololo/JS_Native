// Uppgift: En element-loop
// Instruktioner
// Skapa en loop som loggar de tre enskilda li-elementen var och en för sig.

// console.log-instruktionen ska alltså bara förekomma en gång i koden, men ska (på grund av loopen) köras tre gånger.

// Lösningen ska fungera oavsett hur många li-element det är i listan.

// Din lösning

/*
<!DOCTYPE html>
<html lang="sv">
  <head>
    <meta charset="utf-8">
    <title>En element-loop</title>
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

const items = ol > li;

for (let n = 0; n < ol > li.length; n++) {
  console.log(items[n])
}