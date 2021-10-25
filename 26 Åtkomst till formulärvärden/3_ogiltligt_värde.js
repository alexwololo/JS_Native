// Uppgift: Två värden
// Instruktioner
// Skriv kod som nyttjar Web Storage på ett sådant sätt att localStorage.getItem('a') !== null && localStorage.getItem('a') === sessionStorage.getItem('b') utvärderas till true.

// Din lösning


// <!DOCTYPE html>
// <html lang="sv">
//   <head>
//     <meta charset="utf-8">
//     <title>Två värden</title>
//   </head>
//   <body>
//     <script src="index.js"></script>
//   </body>
// </html>

// localStorage.getItem('a') !== null && localStorage.getItem('a') === sessionStorage.getItem('b')

let name = document.querySelector('#name')
let send = document.querySelector('#send')
let greet= document.querySelector('#greeting')
let errors = document.querySelector('#errors')
let button =document.querySelector('#send')

button.disabled = true;
document.getElementById('errors').style.display = 'block'

function myF(){
if (name.value === "" || name.value === undefined){
    button.disabled = true;
    document.getElementById('errors').style.display = 'block'
    greet.textContent = ''
}
else{button.disabled = false;
document.getElementById('errors').style.display = 'none'
    function x(){
    let namnet = document.getElementById("name").value;
    greet.textContent = 'Hej ' + namnet + '!'
    }
    send.addEventListener('click', x)
}
    }
    name.addEventListener('input',myF)
