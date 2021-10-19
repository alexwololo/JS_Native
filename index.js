const prettyCard = function(cardobj) {
  let suitImg = "";

  let finalvalue = "";
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
      finalvalue = 'Q';
      break;
    case 13:
      finalvalue = 'K';
      break;
    default:
      finalvalue = cardobj.value.toString();
  }
  return finalvalue + "" + suitImg;
}
console.log(
  prettyCard({
    "suit": 'HEARTS',
    "value": 1
  }));
console.log(
  prettyCard({
    "suit": 'CLUBS',
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