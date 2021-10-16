// Uppgift: En kortlek
// Instruktioner
// I denna uppgift ska en array som representerar en hel kortlek skapas.

// Tilldela en tom array till en variabel, deck, som ska representera samtliga kort i en kortlek, och lägg in 52 objekt i denna array(med push - instruktionen).Det ska finnas ett objekt för varje kort i en kortlek.

// Array: en ska ha samma typ av objekt som i Alla hjärter - uppgiften(det vill säga, objekt med suit - och value - nycklar), men ska innehålla 13 hjärter, 13 spader, 13 ruter och 13 klöver, i den ordningen.

// Använd en loop likt den i den föregående uppgiften, samt ytterligare en loop baserad på en lista skapad med
// let suits = ['HEARTS', 'SPADES', 'DIAMONDS', 'CLUBS'].Lösningen ska ha en
// for -loop i en
// for -loop, där den ena
// for -loop: en itererar över de fyra suits - värdena, medan den andra itererar över de 13“ value” - värdena.Koden i den inre loopen kommer då att köras 4× 13 = 52 gånger.

// Skapa inte en array bestående av number - värden för att skapa de 13 värdena.Vidare ska“ suit” - orden, såsom“ HEARTS”, ska endast förekomma en gång i lösningen(vid suits - tilldelningen).

// Ladda upp index.js.

// Ladda upp din lösning

let suits = ['HEARTS', 'SPADES', 'DIAMONDS', 'CLUBS'];

let heartsArr = [];
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 13; j++) {
    let objectHeart = {
      "suit": suits[i],

      "value": (j + 1)
    }
    heartsArr.push(objectHeart);

  }
}
console.log(heartsArr);