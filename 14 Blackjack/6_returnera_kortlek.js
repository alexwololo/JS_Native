// Uppgift: Returnering av en kortlek
// Instruktioner
// Skapa en funktion, createDeck, som producerar och returnerar en kortlek(ett array - värde med kortobjekt i), som den array som producerades i uppgiften En kortlek.

// Ladda upp index.js.

// Ladda upp din lösning

console.log(createDeck());

function createDeck() {
  let suits = ['HEARTS', 'SPADES', 'DIAMONDS', 'CLUBS'];
  let deckOfCards = [];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < 13; j++) {
      let objectHeart = {
        "suit": suits[i],

        "value": (j + 1)
      }
      deckOfCards.push(objectHeart);

    }
  }
  return deckOfCards;
}