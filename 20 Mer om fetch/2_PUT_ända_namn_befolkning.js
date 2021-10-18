// Uppgift: PUT: Ändra namn och befolkning
// Instruktioner
// Visa tre prompt - dialogrutor som låter användaren skriva in ID(i den första dialogrutan), namn(i den andra dialogrutan) och befolkning(i den tredje dialogrutan), och sedan uppdaterar informationen om denna stad, enligt vad användaren skrev in , i Cities - tjänsten.

// Svaret från servern behöver inte hanteras.

// Ladda upp index.js.

// Ladda upp din lösning

let id = prompt('Enter ID')
let city = prompt('Enter new cityname');
let pop = prompt('Enter population');

fetch("https://avancera.app/cities/", {
    body: JSON.stringify({
      id: id,
      name: city,
      population: pop,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  })
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
  });