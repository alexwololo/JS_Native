// Uppgift: PATCH: Ändra namn
// Instruktioner
// PATCH är en HTTP - metod som är ganska lik PUT, men som– till skillnad från PUT– inte kräver kompletta“ dokument”(stadsobjekt med ID - , namn - och befolkningnycklar i det här fallet).En fördel med PATCH är att det räcker att ange just det som man vill uppdatera.

// I Cities - tjänsten kan PATCH användas för att byta ut namnet eller befolkningen(eller båda).

// Visa två prompt - dialogrutor som låter användaren skriva in ID(i den första dialogrutan) och namn(i den andra dialogrutan), och sedan uppdaterar namnet på den önskade staden, enligt vad användaren skrev in , i Cities - tjänsten.

// Låt JSON - objektet som skickas endsat innehålla en nyckel: name.

// Svaret från servern behöver inte hanteras.

// Använd inte PUT.

// Ladda upp index.js.

// Ladda upp din lösning




let ide = prompt('Enter ID')
let city = prompt('Enter new cityname');

fetch("https://avancera.app/cities/" + ide, {
    body: JSON.stringify({
      name: city
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "PATCH",
  })
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
  });