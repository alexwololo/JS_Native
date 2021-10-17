// Uppgift: Blackjack - poäng: Del 1(VG)
// Instruktioner
// Skapa en funktion, score, som tar emot en array med kortobjekt som en parameter, och räknar ut och returnerar kortens motsvarande Blackjack - poäng.Ess ska, i denna lösning, alltid vara värda 11(till skillnad från i Blackjack, där ess kan vara värda 1 eller 11 beroende på vad som blir mest gynnsamt för spelaren), klädda kort(knekt(J), dam(Q) och kung(K)) ska vara värda 10, och resterande kort ska vara värda deras value - värde(2 - 10).

// Några exempel:

//   score([{ suit: 'HEARTS', value: 1 }]) ska returnera 11
// score([{ suit: 'SPADES', value: 2 }]) ska returnera 2
// score([{ suit: 'SPADES', value: 11 }]) ska returnera 10
// score([{ suit: 'HEARTS', value: 2 }, { suit: 'HEARTS', value: 3 }, { suit: 'HEARTS', value: 4 }]) ska returnera 9
// Ladda upp index.js.

// Ladda upp din lösning

console.log(score([{
  "suit": 'HEARTS',
  "value": 1
}]));

console.log(score([{
  suit: 'SPADES',
  value: 2
}]));

console.log(score([{
  suit: 'SPADES',
  value: 11
}]));

console.log(score([{
  suit: 'HEARTS',
  value: 2
}, {
  suit: 'HEARTS',
  value: 3
}, {
  suit: 'HEARTS',
  value: 4
}]));

function score(deckarray) {
  let totalScoreCalcu = 0;

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

        break;
    }

    while (totalScoreCalcu > 21)
      totalScoreCalcu -= 10

  }
  return totalScoreCalcu;
}