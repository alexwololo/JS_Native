// Uppgift: Två query-parametrar (VG)
// Instruktioner
// Cities-tjänsten accepterar även en query-parameter minPopulation.

// minPopulation kan användas för att endast hämta städer vars befolkning överskrider ett visst nummer.

// Utöka lösningen från den föregående uppgiften så att sammanlagt två prompt-dialogrutor visas. Den första dialogrutan ska fungera som dialogrutan i den föregående uppgiften, och den andra dialogrutan ska låta användaren skriva in det önskade minPopulation-värdet.

// Användaren ska till exempel kunna skriva in “st” följt av “300000” för att endast hämta Stockholm (eftersom Västerås befolkning är mindre än 300 000).

// Ta reda på hur två query-parametrar kan kombineras, och applicera detta i din lösning av uppgiften.

// Ladda upp index.js.

// Ladda upp din lösning

let x = prompt('city')
console.log(x);

let y = prompt('input population')
console.log(y);

fetch(`https://avancera.app/cities/?name=${x}&minPopulation=${y}`)
  .then(response => response.json())
  .then(result => {
    console.log(result)
  });
