// ppgift: En valfri stad
// Instruktioner
// Utöka lösningen från den föregående uppgiften så att ID - värdet beror på vad användaren skriver in i en prompt - dialogruta.

// Om användaren skriver in “4787e794 - b3ac - 4 a63 - bba0 - 03203 f78e553” så ska samma sak loggas som i den tidigare uppgiften, men om användaren skriver in ett annat ID - värde så ska staden som associeras med detta andra ID - värde loggas istället.

// Vad som loggas ska alltså bero på vad användaren gör.

// Ladda upp index.js.

// Ladda upp din lösninglet q = prompt('input id')


console.log(q);

fetch('https://avancera.app/cities/' + q)
  .then(response => response.json())
  .then(result => {
    console.log(result)
  })


///////////////////////////////////////////////////

let input = prompt('Enter ID')
let promise = fetch('https://avancera.app/cities/' + input)

promise
  .then(response => {
    console.log(response)

    let someOtherPromise = response.json()

    return someOtherPromise
  })
  .then(result => {
    console.log(result)
  })