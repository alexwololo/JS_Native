
// Uppgift: Avdrag för moms: Del 3 (VG)
// Instruktioner
// prompt producerar antingen ett string-värde eller null.

// Vissa strängar (till exempel '5') kan konverteras till number-värden automatiskt (till exempel när *-operatorn används, som i den tidigare uppgiften). Till exempel så utvärderas 5 * '2' till 10. Vissa strängar (till exempel 'Test') kan dock inte konverteras till number-värden på detta sätt. 5 * 'test' blir till exempel det speciella värdet NaN (“not a number”).

// Funktionen isNaN (“is not a number”) kan användas för att undersöka om strängvärden (inte) kan konverteras till number-värden. isNaN(5) producerar false (för att '5' går att göra om till ett nummer), medan isNaN('test') producerar true (för att 'test' inte går att göra om till ett nummer). Eftersom isNaN producerar true eller false, så kan detta användas i kombination med if-satser.

// Utöka lösningen från den föregående uppgiften så att ett meddelandet “Du skrev inte in ett nummer.” visas i en alert-dialogruta om användaren skriver in någonting annat än ett värde som kan konverteras till ett nummer.

// Nettobeloppet (beloppet som skrevs in med ett 20% avdrag) ska fortfarande visas om ett nummer skrevs in.

// Som i den tidigare uppgiften så ska ingen dialogruta visas om användaren avbryter inmatningen.

// Det kan hjälpa att ha en “inre” if-sats i kodblocket för en “yttre” if-sats, till exempel så här:

// if (...) { // Om användaren valde OK
//   if (...) { // Om användaren skrev in ett nummer
//     ... // Visa beloppet utan moms
//   } else { // Om användaren skrev in någonting annat än ett nummer
//     ... // Visa ett fel
//   }
// }
// Notera att isNaN-funktionen måste användas istället för ===, på grund av att NaN === NaN, något oväntat, är false.

// Ladda upp index.js.

// Ladda upp din lösning


let amount = prompt('Enter a number')
if (amount !== null) { // Om användaren valde OK
  if (isNaN(amount) === false) { // Om användaren skrev in ett nummer
    alert(amount * 0.8) // Visa beloppet utan moms
  } else { // Om användaren skrev in någonting annat än ett nummer
    alert('Du skrev inte in ett nummer.') // Visa ett fel
  }
}
