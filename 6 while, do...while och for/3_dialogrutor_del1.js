// Uppgift: Olika antal dialogrutor: Del 1
// Instruktioner
// Använd prompt-funktionen för att ta emot ett nummer från användaren. Visa därefter lika många alert-dialogrutor som detta nummer. Användaren ska alltså kunna anpassa hur många alert-dialogrutor som visas genom att skriva in olika nummer.

// Om användaren till exempel skriver in “3” i prompt-dialogrutan, så ska tre alert-dialogrutor visas.

// Fallet då användaren skriver in någonting annat än ett heltal, eller avbryter inmatningen, behöver inte hanteras. Däremot ska lösningen kunna hantera fallet då användaren önskar noll (0) dialogrutor (vilket ska resultera i 0 alert-dialogrutor). Använd en while-loop. Visa inga alert-dialogrutor utöver de som önskas av användaren.

// Tips: Ett sätt att lösa uppgiften är att, varje gång en dialogruta visas, “räkna ner” från det som användaren skrev. När variabeln som representerar det önskade antalet dialogrutor når 0, så kan loopen avslutas.

// Ladda upp index.js.

// Ladda upp din lösning

let x = prompt ('input number');

while (x > 0) {
  alert('Alert.')
  x--
}
