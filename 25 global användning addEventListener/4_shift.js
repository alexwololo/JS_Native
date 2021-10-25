// Uppgift: Shift
// Instruktioner
// Anpassa lösningen på den föregående uppgiften. Kraven från den föregående uppgiften ska förbli uppfyllda.

// Gör så att loggningen endast sker om Shift-tangenten är nedtryckt. Loggningen ska dock inte ske om endast Shift-tangenten är nedtryckt.

// Till exempel:

// Om användaren trycker på Shift + Enter, så ska Enter loggas.
// Om användaren trycker på Enter, så ska ingenting loggas.
// Om användaren trycker på Shift, så ska ingenting loggas.
// Använd, likt i den föregående uppgiften, “globala” events.

// Det är när tangenten trycks ner (alltså vid keydown-event-typen) som meddelandet ska loggas, inte när tangenten släpps (keyup-event-typen).

// Tips: Uppgiften går att lösa med två if-satser, !==, samt key-egenskapen (som kommer innehålla ett string-värde) och shiftKey-egenskapen (som kommer innehålla ett boolean-värde) i event-objektet. Uppgiften går även att lösa med en if-sats, om && används.

// <!DOCTYPE html>
// <html lang="sv">
//   <head>
//     <meta charset="utf-8">
//     <title>Shift</title>
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
    console.log('Tryck både shift och tangent')
  }
}
addEventListener('keydown', onPress)
