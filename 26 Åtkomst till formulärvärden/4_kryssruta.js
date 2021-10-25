// Uppgift: Ett sammansatt värde
// Instruktioner
// Skriv kod som nyttjar Web Storage på ett sådant sätt att JSON.parse(sessionStorage.getItem('users'))[0].name utvärderas till 'Alice'.

// Din lösning


// <!DOCTYPE html>
// <html lang="sv">
//   <head>
//     <meta charset="utf-8">
//     <title>Ett sammansatt värde</title>
//   </head>
//   <body>
//     <script src="index.js"></script>
//   </body>
// </html>


let name = document.querySelector('#name')
let send = document.querySelector('#send')
let greet= document.querySelector('#greeting')
let errors = document.querySelector('#errors')
let button = document.querySelector('#send')
let error1 = document.querySelector('#name-error')
let error2 = document.querySelector('#consent-error')
let box = document.querySelector('#consent')

button.disabled = true;
document.getElementById('errors').style.display = 'block'

function t(){
  if (box.checked !== true && name.value === ""){
    greet.textContent = ''
    button.disabled = true;
    document.getElementById('errors').style.display = 'block'
    document.getElementById('consent-error').style.display = 'list-item'
    document.getElementById('name-error').style.display = 'list-item'
  }
  else if (box.checked === true && name.value === ""){
    greet.textContent = ''
    button.disabled = true;
    document.getElementById('errors').style.display = 'block'
    document.getElementById('consent-error').style.display = 'none'
    document.getElementById('name-error').style.display = 'list-item'
  }

  else if (box.checked !== true && name.value !== ""){
    greet.textContent = ''
    button.disabled = true;
    document.getElementById('errors').style.display = 'block'
    document.getElementById('name-error').style.display = 'none'
    document.getElementById('consent-error').style.display = 'list-item'
  }

  else{
    button.disabled = false;
    document.getElementById('errors').style.display = 'none'
    document.getElementById('name-error').style.display = 'none'
    document.getElementById('consent-error').style.display = 'none'
    function k(){
      let namnet = document.getElementById("name").value;
      greet.textContent = 'Hej ' + namnet + '!'
    }
    send.addEventListener('click', k)
  }
}


name.addEventListener('input',t)
box.addEventListener('change',t)
