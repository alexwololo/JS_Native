// Uppgift: Öka ett värde
// Instruktioner
// Gör så att “counter”-elementet innehåller texten 1 från början.

// Gör vidare så att texten i “counter”-elementet ökar med 1 varje gång knappen klickas på.

// Om knappen klickas på en gång så ska det stå 2, om knappen klickas på två gånger så ska det stå 3, och så vidare.

// Om en variabel/konstant som innehåller div-elementet heter element, så kan texten i div-elementet ökas med element.textContent = Number(element.textContent) + 1.

// Din lösning

// <!DOCTYPE html>
// <html lang="sv">
//   <head>
//     <meta charset="utf-8">
//     <title>Öka ett värde</title>
//   </head>
//   <body style="margin: 0; min-height: 100vh;">
//     <div id="value"></div>
//     <input id="increase" type="button" value="Öka">
//     <script src="index.js"></script>
//   </body>
// </html>


let element = document.getElementById("value")
element.textContent =  1

let btn = document.getElementById("increase")

function displayDialogBox() {
  element.textContent = Number(element.textContent) + 1
}
btn.addEventListener('click', displayDialogBox)
