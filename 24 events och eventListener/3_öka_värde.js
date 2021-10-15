// Uppgift: Öka ett värde
// Instruktioner
// Gör så att “counter”-elementet innehåller texten 1 från början.

// Gör vidare så att texten i “counter”-elementet ökar med 1 varje gång knappen klickas på.

// Om knappen klickas på en gång så ska det stå 2, om knappen klickas på två gånger så ska det stå 3, och så vidare.

// Om en variabel/konstant som innehåller div-elementet heter element, så kan texten i div-elementet ökas med element.textContent = Number(element.textContent) + 1.

// Din lösning

element.textContent = Number(element.textContent) + 1.

let x = document.querySelector('#increase')
let y = document.querySelector('#button')

function displayDialogBox() {
  element.textContent = Number(element.textContent) + 1.
}
element.addEventListener('click', displayDialogBox)