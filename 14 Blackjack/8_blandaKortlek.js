const cards = createDeck();
console.log("cards ", cards)


function createDeck() {
  let suits = ['HEARTS', 'SPADES', 'DIAMONDS', 'CLUBS'];
  let deckOfCards = [];
  for (let i = 0; i < 4; i++) {
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

console.log("Shuffle Card function ", shuffle(cards))

function shuffle(cardsarray) {
  let currentIndex = cardsarray.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [cardsarray[currentIndex], cardsarray[randomIndex]] = [
      cardsarray[randomIndex], cardsarray[currentIndex]
    ];
  }

  return 'undefined';
}
console.log("cards Shuffle ", cards)