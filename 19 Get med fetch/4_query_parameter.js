// Uppgift: En query-parameter
// Instruktioner
// Så kallade query-parametrar är ett sätt att skicka information till en webbtjänst/server i samband med att webbanrop görs. Om webbanrop liknas vid funktionsanrop, så kan query-parametrar liknas vid funktionsargument.

// En query-parameter kan användas genom att man lägger till följande text efter den “ordinarie” webbadressen:

// Ett frågetecken (?)
// Query-parameterns namn
// Ett lika med-tecken (=)
// Query-parameterns värde
// Om man till exempel vill lägga till query-parametern a med värdet b, så kan man lägga till ?a=b i slutet på webbadressen.

// En query-parameter name kan användas då anrop till https://avancera.app/cities/ görs. Till exempel så är det möjligt att göra ett anrop mot https://avancera.app/cities/?name=st för att hämta Stockholm och Västerås (som båda har “st” i namnet).

// Visa en (och endast en) prompt-dialogruta som tar emot en söksträng (likt “st”, men användaren ska kunna välja vad hen söker efter).

// Använd slutligen denna söksträng för att hämta och (likt i uppgiften Alla städer) logga de matchande städerna till konsolen.

// Ladda upp index.js.

let x = prompt('city')
console.log(q);

fetch('https://avancera.app/cities/?name=' + q)
  .then(response => response.json())
  .then(result => {
    console.log(result)
  })
