// Uppgift: Tangentkod
// Instruktioner
// Gör så att tangentkoden bestående av bokstäver (inte siffror) loggas i konsolen när en tangent trycks ner.

// Den korrekta tangentkoden för uppåtpil (Up), till exempel, är ArrowUp.

// Notera att webbdokumentet måste ha fokus för att tangenttryckningarna ska kunna registreras. Webbdokumentet (som till exempel finns i Förhandsgranskning-rutan ovan) kan ges fokus genom att klicka på det (på insidan av rutan ovan).

// Använd, likt i den föregående uppgiften, “globala” events.

// Din lösning

// <!DOCTYPE html>
// <html lang="sv">
//   <head>
//     <meta charset="utf-8">
//     <title>Tangentkod</title>
//   </head>
//   <body>
//     <script src="index.js"></script>
//   </body>
// </html>


let onPress = function(e) {
  console.log(e.key)
}


addEventListener('keydown', onPress)
