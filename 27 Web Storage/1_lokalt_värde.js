// Uppgift: Ett “lokalt” värde
// Instruktioner
// Spara värdet 'green' i Web Storage, under nyckeln color, på ett sätt att värdet är tillgängligt även om sidan laddas om, men endast i samma flik.

// Din lösning

// <!DOCTYPE html>
// <html lang="sv">
//   <head>
//     <meta charset="utf-8">
//     <title>Ett “lokalt” värde</title>
//   </head>
//   <body>
//     <script src="index.js"></script>
//   </body>
// </html>


sessionStorage.setItem('color', 'green')
