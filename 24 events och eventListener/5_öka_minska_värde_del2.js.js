// Uppgift: Öka eller minska ett värde: Del 2 (VG)
// Instruktioner
// Anpassa lösningen på den föregående uppgiften. Kraven från den föregående uppgiften ska förbli uppfyllda.

// Gör så att värdet inte kan minska till 0 eller negativa värden. Värdet ska alltså inte kunna gå under 1.

// Gör också så att “decrease”-knappen är “disabled” om värdet är 1.

// Tips: Om en variabel/konstant decrease innehåller knappens elementobjekt så gör decrease.setAttribute('disabled', '') knappen “disabled.” Knappen kan omvänt göras till “enabled” med removeAttribute-metoden på samma objekt.

// Din lösning

// <!DOCTYPE html>
// <html lang="sv">
//   <head>
//     <meta charset="utf-8">
//     <title>Öka eller minska ett värde: Del 2</title>
//   </head>
//   <body style="margin: 0; min-height: 100vh;">
//     <div id="value"></div>
//     <input id="decrease" type="button" value="Minska">
//     <input id="increase" type="button" value="Öka">
//     <script src="index.js"></script>
//   </body>
// </html>


let btnInc = document.getElementById("increase")
let btnDec = document.getElementById("decrease")
btnDec.disabled = true;

let element = document.getElementById("value")
element.textContent = 1

function pos() {
  element.textContent = Number(element.textContent) + 1
 if (Number(element.textContent) > 1) {
   btnDec.disabled = false;
 }
}

btnInc.addEventListener('click', pos)
btnDec.addEventListener('click', neg)

function neg() {
  if (Number(element.textContent) > 1) {
    element.textContent = Number(element.textContent) - 1;
 }
 if (Number(element.textContent) == 1) {
   btnDec.disabled = true;
 }
}
