// Uppgift: En parameter och ett returvärde
// Instruktioner
// Anpassa lösningen från den föregående uppgiften så att greeting har en parameter. Parametern kan antas innehålla en sträng.

// Funktionen ska returnera resultatet av en strängsammanslagning involverande parametern så att “Hello”, följt av värdet i parametern, följt av “!”, visas.

// Argumentet 'World' ska till exempel göra så att 'Hello World!' returneras.

// Funktionen kan testas med console.log(greeting('World')).

// Ladda upp index.js.

// Ladda upp din lösning


function greeting(World = 'Yolo ') {
  return World
}
console.log(greeting('Hello' + World + '!'));
