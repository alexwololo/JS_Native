
// Uppgift: Användarnamn och lösenord
// Instruktioner
// Gör så att två prompt-dialogrutor används för att ta emot två uppgifter från användaren: användarnamn och lösenord.

// Användarnamnet matas in i en prompt-dialogruta (den första), medan lösenordet matas in i en annan (den andra).

// Om användarnamnet är (exakt) “alice” och lösenordet är (exakt) “secret”, så ska en alert-dialogruta med texten “Inloggad!” visas, annars så ska en alert-dialogruta med texten “Fel användarnamn eller lösenord!” visas.

// Lösningen behöver inte hantera fallet då prompt-inmatningar avbryts.

// Uppgiften kan lösas med if och else, samt === och &&.

// (Ett “riktigt” inloggningssystem är mer avancerat än så här – syftet här är endast att öva.)

// Ladda upp index.js.

// Ladda upp din lösning


const username = prompt('Enter username')
const pass = prompt('Enter password')

if (username === 'alice' && pass === 'secret') {
  alert('Inloggad!')
} else {
  alert('Fel användarnamn eller lösenord!')
}
