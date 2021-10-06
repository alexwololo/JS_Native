
let q = prompt('input id')
console.log(q);

fetch('https://avancera.app/cities/' +q)
  .then(response => response.json())
  .then(result => {
    console.log(result)
  })


///////////////////////////////////////////////////

let input = prompt('Enter ID')
let promise = fetch('https://avancera.app/cities/' + input)

promise
  .then(response => {
    console.log(response)

    let someOtherPromise = response.json()

    return someOtherPromise
  })
  .then(result => {
    console.log(result)
  })
