// Uppgift: Städer (VG)
// Instruktioner
// Skriv kod som (med fetch) hämtar städerna från https://avancera.app/cities/ och spara dessa i localStorage så att de är tillgängliga i array-form via JSON.parse(localStorage.getItem('cities')).

// Din lösning


// <!DOCTYPE html>
// <html lang="sv">
//   <head>
//     <meta charset="utf-8">
//     <title>Städer (VG)</title>
//   </head>
//   <body>
//     <script src="index.js"></script>
//   </body>
// </html>

let promise = fetch("https://avancera.app/cities/");

  promise
    .then((response) => {
      let someOtherPromise = response.json();

      return someOtherPromise;
    })
    .then((result) => {
      localStorage.setItem("cities", JSON.stringify(result));
    });
