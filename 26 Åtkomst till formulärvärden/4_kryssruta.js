// Uppgift: Ett sammansatt värde
// Instruktioner
// Skriv kod som nyttjar Web Storage på ett sådant sätt att JSON.parse(sessionStorage.getItem('users'))[0].name utvärderas till 'Alice'.

// Din lösning


// <!DOCTYPE html>
// <html lang="sv">
//   <head>
//     <meta charset="utf-8">
//     <title>Ett sammansatt värde</title>
//   </head>
//   <body>
//     <script src="index.js"></script>
//   </body>
// </html>


let onPress = function(e) {
  if (e.key && e.shiftKey === true) {
    if (e.keyCode !== 16) {
    console.log(e.key ) }
    else {}  } else {
    console.log('shift + tangent')
  }
}
addEventListener('keydown', onPress)
