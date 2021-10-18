// Uppgift: POST: Lägg till en stad
// Instruktioner
// Visa två prompt - dialogrutor som låter användaren skriva in namn(i den första dialogrutan) och befolkning(i den andra dialogrutan), och sedan lägger till en stad med namnet och befolkningen som användaren skrev in , på https: //avancera.app/cities/.

//   Notera att befolkningsmängden behöver skickas som ett number - värde(snarare än ett string - värde) till servern.

// Svaret från servern behöver inte hanteras på något sätt.

// Ladda upp index.js

let city = prompt('Enter new cityname');
let pop = prompt('Enter population');
fetch('https://avancera.app/cities/', {
    body: '{ "name": "' + city + '", "population": ' + pop + ' }',
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  })
  .then(response => response.json())
  .then(result => {
    console.log(result)
  })

//eller

let city = prompt("Enter new cityname");
let pop = prompt("Enter population");
fetch("https://avancera.app/cities/", {
    body: JSON.stringify({
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