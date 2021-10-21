// Uppgift: Lägg till ett element, på slutet
// Instruktioner
// Lägg till ett li - element i slutet på ol - elementet.

// Koden ska fungera oavsett hur många element det än skulle finnas i listan.

// Använd appendChild - funktionen för att lägga till li - elementet.

// Din lösning

let newEl = document.createElement('li');
let newText = document.createTextNode('Hello World!')
newEl.appendChild(newText);
let pos = document.getElementsByTagName('ol')[0];
pos.appendChild(newEl);

console.log(newText);
console.log(newEl);

//eller

let li = document.createElement('li')
li.textContent = 'någon text'
document.querySelector('ol').appendChild(li)