// Uppgift: Alla städer
// Instruktioner
// Använd fetch för att göra ett GET - anrop till Cities - tjänsten och logga det(från JSON - innehållet) resulterande JavaScript - array - värdet(städerna) till konsolen.

// Cities - tjänsten kan nås via webbadressen https: //avancera.app/cities/.

//   Ladda upp index.js.

// Ladda upp din lösning

fetch('https://avancera.app/cities/')
  .then(response => response.json())
  .then(result => {
    console.log(result)
  })




// fetch('https://avancera.app/cities/', {
//     body: '{"name": "Testad", "population":123}',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     method: 'POST'
// })
//     .then(response => response.json())
//     .then(result => {
//         console.log(result)
//     })


// console.log("Welcome back Strotter!");

// console.log(fetch('https://avancera.app/cities/'));

// fetch('https://avancera.app/cities/')
// .then(response => console.log(response))


// fetch('https://avancera.app/cities/')
//     .then(response => response.json())
//     .then(result => {
//         console.log(result)
//     })