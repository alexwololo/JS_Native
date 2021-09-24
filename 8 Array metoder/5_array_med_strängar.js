// Uppgift: En array med strängar (VG)
// Instruktioner
// Skapa en variabel/konstant a, och tilldela en array till a sådan att…

// a innehåller endast string-värden,
// a[1].length === a.length + a[0].length - 1,
// a[1].startsWith('a'),
// a.indexOf('c') === 2, och
// a[3] === undefined
// … utvärderas till true.

// Ladda upp index.js.

// Ladda upp din lösning

const a = ['noll', 'adamsk', 'c']
console.log(a);
console.log(a[1].length === a.length + a[0].length - 1);
console.log(a.length);
console.log(a.length + a[0].length);
console.log(a.length + a[0].length - 1);
