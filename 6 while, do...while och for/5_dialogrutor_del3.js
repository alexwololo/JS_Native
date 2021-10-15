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


// will first check parseInt(number)
// if true it will check other operator
// and that is or operator
// then it will inside loop
// it parseInt(nmbr) is false null or undefined it will check next operator which is or then it will check second condition parseInt(nmbr) if its true it will run code inside
// if other wise it will not run inside
// if code

while (true) {
  let nmbr = prompt("Enter Number");

  if (parseInt(nmbr) || parseInt(nmbr) === 0) {
    for (let i = 1; i <= nmbr; i++) {
      alert("Alert " + i + " times");
    }

    break;
  }
}


//ELLER


let s

while (s === '' || isNaN(s) || s === null) {
  s = prompt()
}

for (let n = Number(s); n > 0; n--) {
  alert()
}


//for lop som presenterar promptdialogrutor så länge användaren skriver ngt annat än number eller trycker på avbryt
//for loop som visar antalet önskade alertrutor som i fööra uppgiften