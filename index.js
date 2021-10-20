//console.dir(document)
console.log(document.getElementById('heading')) // h1-elementet
console.log(document.getElementsByTagName('p')) // “Array-like” med båda p-elementen (och blankstegtexten)
console.log(document.getElementsByClassName('introduction')) // “Array-like” med endast ett p-element
console.log(document.querySelector('body > p')) // Det första p-elementet
console.log(document.querySelectorAll('body > p')) // “Array-like” med båda p-elementen

const ele = document.getElementById('heading');
console.log(ele);
console.dir(ele);