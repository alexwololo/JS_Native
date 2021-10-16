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