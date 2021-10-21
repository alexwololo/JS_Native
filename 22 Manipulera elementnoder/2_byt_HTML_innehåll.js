/*
Uppgift: Byt ut HTML-innehåll
Instruktioner
Byt (med JavaScript) ut innehållet i h1-elementet till HTML-koden Hello <u>World</u>!.

Använd innerHTML.

Texten under “World” ska bli understruken.

Din lösning

<!DOCTYPE html>
<html lang="sv">
  <head>
    <meta charset="utf-8">
    <title>Byt ut HTML-innehåll</title>
  </head>
  <body>
    <h1>En rubrik</h1>
    <script src="index.js"></script>
  </body>
</html>


*/

document.querySelector('h1').innerHTML = "Hello <u>World</u>!";