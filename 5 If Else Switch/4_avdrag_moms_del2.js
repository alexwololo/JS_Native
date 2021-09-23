
// Uppgift: Avdrag för moms: Del 2
// Instruktioner
// Anpassa lösningen på uppgiften Avdrag för moms: Del 1. Kraven från uppgiften ska förbli uppfyllda.

// Gör så att ingen alert-dialogruta visas om användaren väljer att avbryta prompt-inmatningen genom att klicka på Avbryt, Cancel eller liknande. Lösningen ska alltså kunna visa en eller ingen alert-dialogruta beroende på vad användaren gör.

// Lösningen ska bete sig som vanligt om användaren inte avbryter inmatningen (det vill säga, den ska då räkna ut och visa beloppet utan moms, likt innan).

// Använd värdet som prompt-instruktionen producerar för att kontrollera vad som ska hända.

// Tips: Om amount === null är true så betyder det att användaren har tryckt Avbryt, Cancel eller liknande. Och omvänt: om amount !== null är true så betyder det att användaren inte har tryckt Avbryt, Cancel eller liknande.

// Ladda upp index.js.

// Ladda upp din lösning

const amount = prompt('Enter a number')
if (amount !== null) {
  alert(amount * 0.8)
}
