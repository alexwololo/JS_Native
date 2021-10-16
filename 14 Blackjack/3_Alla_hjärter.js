// Uppgift: Hjärter ess
// Instruktioner
// Skapa en behållare, aceOfHearts, och tilldela ett objekt till denna behållare med nycklarna suit och value.

// Värdet som ska vara associerat med suit - nyckeln ska vara / 'HEARTS', och värdet som ska vara associerat med value - nyckeln ska vara 1.

// Uttryckt annorlunda ska aceOfHearts.suit vara 'HEARTS'
// och aceOfHearts.value vara 1.

// Ladda upp index.js.

let heartsArr = [];
for (let i = 0; i < 13; i++) {
  let objectHeart = {
    "suit": 'HEARTS',

    "value": (i + 1)
  }
  heartsArr.push(objectHeart);

}
console.log(heartsArr);
console.log("heartsArr[0] ", heartsArr[0]);
console.log("heartsArr[1] ", heartsArr[1]);