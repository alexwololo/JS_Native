// Uppgift: Öka eller minska ett värde: Del 3 (VG)
// Instruktioner
// Anpassa lösningen på uppgiften Öka eller minska ett värde: Del 2 (VG). Kraven från uppgiften ska förbli uppfyllda.

// Gör så att det är möjligt att öka och minska värdet även med Up/uppåtpil (för att öka värdet) och Down/nedåtpil (för att minska värdet).

// Det ska alltså fortfarande gå att klicka på knapparna.

// Oavsett om knapparna eller piltangenterna används så ska “decrease”-knappen vara “disabled” om värdet 1, och det ska inte kunna visas ett värde mindre än 1.

// Använd, likt i Shift-uppgiften, “globala” events för tangenthändelserna. Använd inga “lokala” events på body-elementet.

// Din lösning


// <!DOCTYPE html>
// <html lang="sv">
//   <head>
//     <meta charset="utf-8">
//     <title>Öka eller minska ett värde: Del 3 (VG)</title>
//   </head>
//   <body>
//     <div id="value"></div>
//     <input id="decrease" type="button" value="Minska">
//     <input id="increase" type="button" value="Öka">
//     <script src="index.js"></script>
//   </body>
// </html>

let val = 1;
let divValue = document.getElementById("value");
divValue.textContent = val;
let dec = document.getElementById("decrease");
let inc = document.getElementById("increase");
dec.disabled = true;

function decrementer() {
  if (val > 1) {
    divValue.textContent = --val;
  }
  if (val <= 1) dec.disabled = true;
}

function incrementer() {
  divValue.textContent = ++val;
  dec.disabled = false;
}

dec.addEventListener("click", (e) => decrementer());
inc.addEventListener("click", (e) => incrementer());

let onPress = function (e) {
  if (e.keyCode === 38) {
    incrementer();
  }
  if (e.keyCode === 40) {
    decrementer();
  }
};
addEventListener("keydown", onPress);
