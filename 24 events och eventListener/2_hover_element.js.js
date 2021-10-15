// Uppgift: Ett hover-element
// Instruktioner
// Gör så att ett console.log-anrop sker varje gång muspekaren förflyttas övanför div-elementet.

// Din lösning

let element = document.querySelector('#hover-area')
function displayDialogBox() {
  console.log('yo mama');
}
element.addEventListener('mouseover', displayDialogBox)



  < !DOCTYPE html >
    <html lang="sv">
      <head>
        <meta charset="utf-8">
        <title>Ett hover-element</title>
      </head>
      <body style="margin: 0; min-height: 100vh;">
        <div id="hover-area" style="min-height: 100vh;"></div>
        <script src="index.js"></script>
      </body>
    </html>
