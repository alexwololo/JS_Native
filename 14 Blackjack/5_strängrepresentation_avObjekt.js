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
    "suit": 'SPADES',
    "value": 11
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
  switch (cardobj.value) {
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
  return finalvalue + "" + suitImg;
}