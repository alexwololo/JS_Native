// Uppgift: Ta bort ett element
// Instruktioner
// Ta bort det andra li - element från listan.

// Endast elementen för Alice och Cesar ska finnas kvar.

// Använd removeChild - funktionen.

// Din lösning

/**
<!DOCTYPE html>
<html lang="sv">
  <head>
    <meta charset="utf-8">
    <title>Ta bort ett element</title>
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


let removeEl = document.getElementsByTagName('li')[1];
let containerEl = removeEl.parentNode;
containerEl.removeChild(removeEl);
