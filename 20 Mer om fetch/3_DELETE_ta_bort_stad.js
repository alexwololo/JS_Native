// Uppgift: DELETE: Ta bort en stad
// Instruktioner
// Visa en(och endast en) prompt - dialogruta som låter användaren skriva in ett ID, och sedan tar bort staden med detta ID, från Cities - tjänsten.

// Svaret från servern behöver inte hanteras.

// Ladda upp index.js.

// Ladda upp din lösning

let del = prompt('Enter ID')
fetch('https://avancera.app/cities/' + del, {
  method: 'DELETE'
}).then(response => {
  console.log(response)
})