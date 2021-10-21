/*
Uppgift: Sätt ett attribut
Instruktioner
Gör (med JavaScript) så att listan använder romerska siffror med gemener (små bokstäver), istället för “vanliga” arabiska siffror.

Använd ett attribut.

Mozilla har dokumenterat ol-elementet på https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol.

Använd setAttribute.

listStyle är en CSS-egenskap och inte ett attribut, och ska därför inte användas.

Din lösning

<!DOCTYPE html>
<html lang="sv">
  <head>
    <meta charset="utf-8">
    <title>Sätt ett attribut</title>
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

https://stackoverflow.com/questions/62026918/setting-attributes-using-javascript/62027020
*/

document.querySelector('#players ol').setAttribute('type', 'i')

//or

document.querySelector('ol').setAttribute('type', 'i')