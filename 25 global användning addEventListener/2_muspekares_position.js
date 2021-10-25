// Uppgift: Muspekarens horisontella position
// Instruktioner
// Gör så att muspekarens x-koordinat (horisontella position) loggas när man klickar på webbsidan.

// Ju närmare kanten musklicken görs, desto närmare 0 ska numret vara som loggas.

// Använd pageX–egenskapen på event-objektet.

// Använd addEventListener/liknande “globalt”. Använd alltså inte event (“lokalt”) på specifika elementobjekt.

// Din lösning


// <!DOCTYPE html>
// <html lang="sv">
//   <head>
//     <meta charset="utf-8">
//     <title>Muspekarens position</title>
//   </head>
//   <body style="margin: 0; min-height: 100vh;">
//     <script src="index.js"></script>
//   </body>
// </html>


let onClick = function(e) {
  console.log(e.pageX)
}


addEventListener('click', onClick)
