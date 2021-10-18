const cards = createDeck(); // call function
console.log("cards ", cards)


function createDeck() {
  let suits = ['HEARTS', 'SPADES', 'DIAMONDS', 'CLUBS']; //// array with 4 values
  let deckOfCards = []; ////empty array
  for (let i = 0; i < 4; i++) { // for loop run 4 times mean for suits
    for (let j = 0; j < 13; j++) { // for loop run 13 times mean for values
      let objectHeart = {
        "suit": suits[i],

        "value": (j + 1)
      }
      deckOfCards.push(objectHeart); // created object added to array

    }
  }
  return deckOfCards; // return deckOfCards
}

console.log("Shuffle Card function ", shuffle(cards)) // call shuffle function

function shuffle(cardsarray) { //Fisher-Yates shuffle algorithm function
  let currentIndex = cardsarray.length, //get number of elments  of passed array
    randomIndex;

  while (currentIndex != 0) { //while loopp to check currentIndex is not equal to 0
    randomIndex = Math.floor(Math.random() * currentIndex); // create random number
    currentIndex--; // less one in currentIndex
    [cardsarray[currentIndex], cardsarray[randomIndex]] = [ //assign random array value to   other index
      cardsarray[randomIndex], cardsarray[currentIndex]
    ];
  }

  return; // return undefined to show
}
console.log("cards Shuffle ", cards)