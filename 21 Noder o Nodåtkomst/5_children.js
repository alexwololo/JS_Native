// Uppgift: children (VG)
// Instruktioner
// Anpassa lösningen på den föregående uppgiften. Kraven från den föregående uppgiften ska förbli uppfyllda.

// Använd dock konstanten ol från JavaScript-koden i index.html-filen i kombination med children-egenskapen.

// Använd inte document.querySelector, document.querySelectorAll, document.getElementById eller document.getElementsByTagName.

// Din lösning

/*
<!DOCTYPE html>
<html lang="sv">
  <head>
    <meta charset="utf-8">
    <title>children (VG)</title>
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
    <script>
      const ol = document.querySelector('ol')
    </script>
    <script src="index.js"></script>
  </body>
</html>
 */

for (let n = 0; n < ol.children.length; n++) {
  console.log(ol.children[n])

}