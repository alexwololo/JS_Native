// Uppgift: Ålderskontroll
// Instruktioner
// Gör så att en prompt-dialogruta först visas, och att en alert-dialogruta visas därefter. Vad som står i alert-dialogrutan ska bero på vad användaren skriver in i prompt-dialogrutan.

// Om användaren anger 18 eller ett större tal (som en inmatning i prompt-dialogrutan), så ska alert-dialogrutan visa texten “Vuxen”. Om spelaren anger ett nummer mindre än 18 (till exempel 17), så ska alert-dialogrutan istället visa texten “Ungdom”.

// Uppgiften kan lösas med if och else, samt <=, <, >= eller >.

// Ladda upp index.js.

// Ladda upp din lösning


let age = prompt('Enter you age');

if (age > 17) {
alert('Vuxen');
} else {
  alert('Ungdom')
}
