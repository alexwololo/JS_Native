// Uppgift: Nästlade objekt: Del 2 (VG)
// Instruktioner
// Skapa en variabel/konstant o, och tilldela ett objekt till o sådant att o.a[2].v[1].w.x === 5 utvärderas till true.

// Ladda upp index.js.

// Ladda upp din lösning

//o.a[2].v[1].w.x === 5 evaluates to true

/**
 * Objekt
 *  Array
 *    Objekt
 *      Array
 *        Objekt
 *          Objekt
 */

let o = {a: [{},{},{v:[{},{w: {x:5}}]}]};

console.log(o.a[2].v[1].w.x === 5);
