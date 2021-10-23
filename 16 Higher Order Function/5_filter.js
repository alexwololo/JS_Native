// Uppgift: filter (VG)
// Instruktioner
// Implementera en funktion, filter, som, likt funktionen i de föregående uppgifterna, tar en array och en funktion som argument.

// filter-funktionen ska anropa funktionen som skickades in som argument en gång för varje värde i array:en, med array-värdet i fråga som argument, och ska returnera en ny array som endast innehåller de array-värden för vilka argumentfunktionen returnerade true.

// filter([5, 10, 15], value !== 5) ska till exempel returnera [10, 15].

// Skapa en tom array inuti filter-funktionen, och lägg till de “önskade” värdena i denna.

// Använd inte den i JavaScript inbyggda filter-funktionen.

// Ladda upp din lösning
function filter(arr, func) {
  let newArr = [];
  arr.forEach((ele) => {
    func(ele) ? newArr.push(ele) : null;
  });
  return newArr;
}

function func(ele) {
  return ele >= 10 || ele % 2 === 0;
}
