// Uppgift: Ett textfält, ett stycke och en knapp
// Instruktioner
// Gör så att stycket (p-elementet) innehåller texten Hej X!, där X är texten som står i textfältet, när knappen klickas på.

// Till exempel: om användaren skriver in “Alice” och klickar på knappen, så ska det stå Hej Alice! i stycket.

// Tips: Använd addEventListener, textContent och click-event:et.

// Din lösning


// <!DOCTYPE html>
// <html lang="sv">
//   <head>
//     <meta charset="utf-8">
//     <title>Ett textfält, ett stycke och en knapp</title>
//   </head>
//   <body>
//     <label for="name">Namn</label>
//     <input id="name" placeholder="Namn">
//     <input id="send" type="button" value="Skicka">
//     <p id="greeting"></p>
//     <script src="index.js"></script>
//   </body>
// </html>

let onClick = function(e) {
  console.log(e.pageX)
}

addEventListener('click', onClick)
