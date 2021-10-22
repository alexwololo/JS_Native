// Uppgift: En klickbar knapp: Del 1
// Instruktioner
// Gör så att ett console.log-anrop sker när Klicka här-knappen klickas på.

// Din lösning
/*
<!DOCTYPE html>
<html lang="sv">
  <head>
    <meta charset="utf-8">
    <title>En klickbar knapp: Del 1</title>
  </head>
  <body>
    <input id="button" type="button" value="Klicka här">
    <script src="index.js"></script>
  </body>
</html>
*/

let element = document.querySelector('#button')
function displayDialogBox() {
  console.log('yo mama');
}
element.addEventListener('click', displayDialogBox)
