// Uppgift: En stad
// Instruktioner
// Använd fetch för att göra ett GET-anrop till den webbadress i Cities-tjänsten som representerar staden med ID-värdet 4787e794-b3ac-4a63-bba0-03203f78e553, och logga det (från JSON-innehållet) resulterande JavaScript-objekt-värdet (staden) till konsolen.

// Ladda upp index.js.

// Ladda upp din lösning


fetch('https://avancera.app/cities/4787e794-b3ac-4a63-bba0-03203f78e553')
    .then(response => response.json())
    .then(result => {
        console.log(result)
    })
