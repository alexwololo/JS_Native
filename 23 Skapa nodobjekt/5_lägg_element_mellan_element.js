// Uppgift: Lägg till ett element, mellan element (VG)
// Instruktioner
// Lägg till ett li-element mellan li-elementen för Bob och Cesar.

// Använd insertBefore-funktionen.

// Din lösning

// <!DOCTYPE html>
// <html lang="sv">
//   <head>
//     <meta charset="utf-8">
//     <title>Lägg till ett element, mellan element (VG)</title>
//   </head>
//   <body>
//     <section id="players">
//       <h1>Spelare</h1>
//       <ol>
//         <li>Alice</li>
//         <li>Bob</li>
//         <li>Cesar</li>
//       </ol>
//     </section>
//     <script src="index.js"></script>
//   </body>
// </html>


let li = document.createElement("li");
let textnode = document.createTextNode("Between Bob & Cesar");
li.appendChild(textnode);

let ol = document.querySelector("ol");

ol.insertBefore(li, ol.lastElementChild);
