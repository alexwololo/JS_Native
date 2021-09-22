
// Uppgift: Truthy och falsy (VG)
// Instruktioner
// Vissa värden i JavaScript är truthy, och andra är falsy.

// Att ett värde är truthy betyder att det blir true om det “tvingas” att bli ett boolean-värde. På ett liknande sett innebär att ett värde är falsy att det blir false om det “tvingas” att bli ett boolean-värde. (Mekanismen med att “tvinga” värden att bli av en annan typ kallas för typtvång, eller type coercion.)

// Exempel på truthy-värden är 1 och 'Test'. Vi kan att dessa värden är truthy genom att uttrycket Boolean(1) blir true, och (det negerade) uttrycket !'Test' blir false.

// Exempel på falsy-värden är null och undefined. Vi kan se att dessa värden är falsy genom att uttrycket Boolean(null) blir false, och (det negerade) uttrycket !undefined blir true.

// Identifiera det enda string-värde som är falsy och tilldela detta till variabeln/konstanten s.

// Identifiera det enda number-värde (förutom specialvärdet NaN) som är falsy, och tilldela detta till variabeln/konstanten n.

// Ladda upp index.js.

// Ladda upp din lösning

//string falsy
const s = '';
//number truthy
let n = 0;

console.log(s);
console.log(n);

