// Uppgift: Två parametrar och returnering av objekt
// Instruktioner
// Skapa en funktion, card, som kan ta emot två argument– ett nummer och en sträng– och spara dessa i ett objekt.card(1, 'HEARTS') ska returnera { suit: 'HEARTS', value: 1 }.

// Ladda upp index.js.

// Ladda upp din lösning

console.log("CARD ", card(1, 'HEARTS'))

function card(value, suit) {

  return {
    "suit": suit,
    "value": value
  }
}