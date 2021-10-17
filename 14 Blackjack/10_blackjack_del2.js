// Uppgift: Blackjack - poäng: Del 2(VG)
// Instruktioner
// Expandera på lösningen från den föregående uppgiften så att att ess kan vara värda 1 eller 11, beroende på vilket som är mest gynnsamt för spelaren.Vad som blir mest gynnsamt för spelaren är det som gör att poängen inte överskrider 21, om det är möjligt.

// Exemplen från den föregående uppgiften gäller även här.Några andra exempel:

//   score([{ suit: 'HEARTS', value: 1 }]) ska returnera 11
// score([{ suit: 'HEARTS', value: 11 }, { suit: 'HEARTS', value: 1 }]) ska returnera 21
// score([{ suit: 'HEARTS', value: 1 }, { suit: 'SPADES', value: 1 }, { suit: 'DIAMONDS', value: 1 }]) ska returnera 13
// score([{ suit: 'HEARTS', value: 1 }, { suit: 'SPADES', value: 1 }, { suit: 'DIAMONDS', value: 1 }, { suit: 'CLUBS', value: 1 }]) ska returnera 14
// Ladda upp index.js.

// Ladda upp din lösning

console.log(score([{
  suit: 'HEARTS',
  value: 1
}]));

console.log(score([{
  suit: 'HEARTS',
  value: 11
}, {
  suit: 'HEARTS',
  value: 1
}]));

console.log(score([{
  suit: 'HEARTS',
  value: 1
}, {
  suit: 'SPADES',
  value: 1
}, {
  suit: 'DIAMONDS',
  value: 1
}]));

console.log(score([{
  suit: 'HEARTS',
  value: 1
}, {
  suit: 'SPADES',
  value: 1
}, {
  suit: 'DIAMONDS',
  value: 1
}, {
  suit: 'CLUBS',
  value: 1
}]));

function score(deckarray) {
  let totalScoreCalcu = 0;
  let aceCount = 0;
  for (let i = 0; i < deckarray.length; i++) {
    switch (deckarray[i].value) {
      case 2:
        totalScoreCalcu += 2;
        break;
      case 3:
        totalScoreCalcu += 3;
        break;
      case 4:
        totalScoreCalcu += 4;
        break;
      case 5:
        totalScoreCalcu += 5;
        break;
      case 6:
        totalScoreCalcu += 6;
        break;
      case 7:
        totalScoreCalcu += 7;
        break;
      case 8:
        totalScoreCalcu += 8;
        break;
      case 9:
        totalScoreCalcu += 9;
        break;
      case 10:
      case 11:
      case 12:
      case 13:
        totalScoreCalcu += 10;
        break;
      case 1:
        totalScoreCalcu += 11;
        aceCount++;
        break;
    }

    while (totalScoreCalcu > 21 && (aceCount-- >= 0))
      totalScoreCalcu -= 10

  }
  return totalScoreCalcu;
}