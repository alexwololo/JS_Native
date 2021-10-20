/*
Uppgift: Lägg till HTML-innehåll i flera element (VG)
Instruktioner
Använd en loop i kombination med innerHTML, för att lägga till följande HTML-kod i varje li-element: <span class="credits">100 credits</span>.

Innehållet som finns i li-elementen från början ska fortfarande finnas kvar. span-elementet ska alltså hamna till höger om namnen i listan.

Lösningen ska fungera oavsett hur många li-element det är i listan.

span-elementen stilsätts via style-elementet i index.html.

Din lösning

<!DOCTYPE html>
<html lang="sv">
  <head>
    <meta charset="utf-8">
    <title>Lägg till HTML-innehåll i flera element (VG)</title>
    <style>
      .credits {
        color: #555;
        font-size: 0.85em;
      }
    </style>
  </head>
  <body>
    <section id="players">
      <h1>Spelare</h1>
      <ol>
        <li>Alice</li>
        <li>Bob</li>
        <li>Cesar</li>
      </ol>
    </section>
    <script src="index.js"></script>
  </body>
</html>



*/