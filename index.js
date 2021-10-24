let send = document.querySelector('#send')
let name = document.querySelector('#name')
let greet = document.querySelector('#greeting')


let myF = function() {

  let x = document.getElementById("name").value;
  greet.textContent = 'Hej ' + x + '!'

}

send.addEventListener('click', myF)
