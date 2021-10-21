/*
Uppgift: Byt ut textinnehåll
Instruktioner
Skriv JavaScript-kod för att byta ut innehållet i h1-elementet till Hello World!.

Använd textContent.

<!DOCTYPE html>
<html lang="sv">
  <head>
    <meta charset="utf-8">
    <title>Byt ut textinnehåll</title>
  </head>
  <body>
    <h1>En rubrik</h1>
    <script src="index.js"></script>
  </body>
</html>


*/
let ele = document.querySelector('h1');
ele.textContent = "Hello World!";

//eller

document.querySelector('h1').textContent = "Hello World!";
console.log(document.querySelector('h1'));