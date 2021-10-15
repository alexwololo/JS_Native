// Uppgift: En klickbar knapp: Del 1
// Instruktioner
// Gör så att ett console.log-anrop sker när Klicka här-knappen klickas på.

// Din lösning
let element = document.querySelector('#button')
function displayDialogBox() {
  console.log('yo mama');
}
element.addEventListener('click', displayDialogBox)
