// Uppgift: Två värden
// Instruktioner
// Skriv kod som nyttjar Web Storage på ett sådant sätt att localStorage.getItem('a') !== null && localStorage.getItem('a') === sessionStorage.getItem('b') utvärderas till true.

// Din lösning


// <!DOCTYPE html>
// <html lang="sv">
//   <head>
//     <meta charset="utf-8">
//     <title>Två värden</title>
//   </head>
//   <body>
//     <script src="index.js"></script>
//   </body>
// </html>

// localStorage.getItem('a') !== null && localStorage.getItem('a') === sessionStorage.getItem('b')

let onPress = function(e) {
  console.log(e.key)
}


addEventListener('keydown', onPress)
