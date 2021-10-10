// Uppgift: document.querySelectorAll
// Instruktioner
// Anpassa lösningen på den föregående uppgiften. Kraven från den föregående uppgiften ska förbli uppfyllda.

// Skapa ytterligare en variabel/konstant, items, och tilldela denna ett “array-like”-värde som innehåller tre elementobjekt: ett för varje li-element i den tillhandahållna HTML-strukturen.

// Använd document.querySelectorAll (för loggningen av section-elementet) och document.querySelectorAll (för loggningen av “array-like”-värdet).

// Använd inte document.getElementById, document.getElementsByClassName eller document.getElementsByTagName.

// Din lösning

const item =
  document.querySelector('#players')

const items =
item.lastElementChild.querySelectorAll('li')


item.lastElementChild it will select last element which is ol
then we will aagain apply
item.lastElementChild.querySelectorAll('li')
now will have all li elements
