// Uppgift: En klickbar knapp: Del 2
// Instruktioner
// Gör så att ett console.log-anrop sker när Klicka här-knappen klickas på.

// Notera att script-elementet är placerat tidigare än input-elementet i HTML-koden.

// Din lösning


// <!DOCTYPE html>
// <html lang="sv">
//   <head>
//     <meta charset="utf-8">
//     <title>En klickbar knapp: Del 2</title>
//     <script src="index.js"></script>
//   </head>
//   <body>
//     <input id="button" type="button" value="Klicka här">
//   </body>
// </html>

let element = document.querySelector('#button')

function displayDialogBox() {
  console.log('hello');
}

addEventListener('click', displayDialogBox)
