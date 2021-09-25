// Uppgift: Olika antal dialogrutor: Del 3 (VG)
// Instruktioner
// Expandera på lösningen från den föregående uppgiften så att den använder…

// en loop för att fortsätta att presentera prompt-dialogrutor för att ta emot antalet önskade dialogrutor så länge användaren skriver in någonting annat än ett nummer eller avbryter inmatningen, samt
// en annan loop som visar det önskade antalet alert-dialogrutor visas, som i den föregående uppgiften.
// Lösningen ska alltså kräva ett nummer – om användaren avbryter promptdialogrutan eller skriver in någonting annat än ett nummer så ska en ny prompt-dialogruta visas.

// Ett exempel på ett flöde: Om användaren skriver in “hej” två gånger (och klickar på OK efter varje gång), följt av “5” (och klickar på OK), så ska sammanlagt tre prompt-dialogrutor visas, efterföljda av fem alert-dialogrutor.

// Ett annat exempel på ett flöde: Om användaren skriver in “hej” en gång (och klickar på OK), och sedan klickar på Avbryt, och sedan skriver in “1” (och klickar på OK), så ska sammanlagt tre prompt-dialogrutor visas, efterföljda av en alert-dialogruta.

// Ladda upp index.js.

// Ladda upp din lösning


let x

do {
  x = prompt('Vad heter du?')
} while (x === null)


for (x = prompt('input number'); x > 0; x--) {
  alert('alert')
}
