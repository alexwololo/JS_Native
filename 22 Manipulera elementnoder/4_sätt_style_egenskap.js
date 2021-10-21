/*
Uppgift: Sätt en style-egenskap
Instruktioner
Gör (med JavaScript) så att det tredje (och endast det tredje) li-elementen visas med röd text.

Använd style-egenskapen för att sätta CSS-egenskapen color till värdet #c00.

Använd inte setAttribute.

Din lösning

<!DOCTYPE html>
<html lang="sv">
  <head>
    <meta charset="utf-8">
    <title>Sätt en style-egenskap</title>
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

https://stackoverflow.com/questions/62483001/queryselector-with-last-child-returns-null-when-there-is-an-element-without-cl
*/

document.querySelector('#players ol li:last-child').style.color = '#c00';