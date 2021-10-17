// Uppgift: Strängrepresentation av ett objekt
// Instruktioner
// Skapa en funktion, prettyCard, som tar emot ett objekt av samma typ som returnerades i den föregående uppgiften(till exempel { suit: 'HEARTS', value: 1 }), och returnerar ett värde på formen 'A♥', det vill säga en sträng med ett värdetecken följt av ett“ suit” - tecken.Funktionen ska ta emot ett argument.Lösningen kan utgå från koden
// const prettyCard = function(card) {... }.

// Använd“ Black Suit” - Unicode - tecknen för“ suit” - tecknet, till exempel från https: //en.wikipedia.org/wiki/Playing_cards_in_Unicode, och låt “A” representera value-värdet 1, “T” representera 10, “J” representera 11, “Q” representera 12, och “K” representera 13. value-värdena 2-9 representeras av de motsvarande strängarna “2”, “3”, och så vidare. Unicode-symbolerna kan kopieras och klistras in i din texteditor som dem är.

//   prettyCard - funktionen skulle kunna innehålla två string - variabler, som den returnerar sammanslagningen av, och två
// switch -satser som producerar de två strängarna utifrån de två värdena i objektparametern.

// Några exempel:

//   prettyCard({ suit: 'HEARTS', value: 1 }) ska returnera A♥
// prettyCard({ suit: 'HEARTS', value: 2 }) ska returnera 2♥
// prettyCard({ suit: 'SPADES', value: 10 }) ska returnera T♠
// prettyCard({ suit: 'SPADES', value: 11 }) ska returnera J♠
// Ladda upp index.js.

// Ladda upp din lösning

console.log(
  prettyCard({
    "suit": 'HEARTS',
    "value": 1
  }));
console.log(
  prettyCard({
    "suit": 'HEARTS',
    "value": 2
  }));
console.log(
  prettyCard({
    "suit": 'SPADES',
    "value": 10
  }));
console.log(
  prettyCard({
    "suit": 'DIAMONDS',
    "value": 11
  }));
console.log(
  prettyCard({
    "suit": 'CLUBS',
    "value": 13
  }));

function prettyCard(cardobj) {
  let suitImg = '';

  let finalvalue = '';
  switch (cardobj.suit) {
    case 'HEARTS':
      suitImg = '\u2665';
      break;
    case 'SPADES':
      suitImg = '\u2660';
      break;
    case 'DIAMONDS':
      suitImg = '\u2666';
      break;
    case 'CLUBS':
      suitImg = '\u2663';
      break;
    default:
      suitImg = 'Invalid Object Value';
  }
  switch (cardobj.value) { //switch statement for value
    case 1:
      finalvalue = 'A';
      break;
    case 10:
      finalvalue = 'T';
      break;
    case 11:
      finalvalue = 'J';
      break;
    case 12:
      finalvalue = 'K';
      break;
    case 13:
      finalvalue = 'Q';
      break;
    default:
      finalvalue = cardobj.value;
  }
  return finalvalue + '' + suitImg;
}