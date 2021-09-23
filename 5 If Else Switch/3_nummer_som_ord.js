// Uppgift: Nummer som ord
// Instruktioner
// Nummer mellan ett och tolv (1-12) skrivs ofta ut som ord, till exempel som “ett”, “två”, “tre”, och så vidare, upp till “tolv”.

// Ta emot ett nummer (till exempel 1, 2 eller 3) med en prompt-dialogruta, och använd sedan switch i kombination med alert för att visa:

// ett, om “1” skrivs in
// två, om “2” skrivs in
// tre, om “3” skrivs in
// fyra, om “4” skrivs in
// fem, om “5” skrivs in
// sex, om “6” skrivs in
// sju, om “7” skrivs in
// åtta, om “8” skrivs in
// nio, om “9” skrivs in
// tio, om “10” skrivs in
// elva, om “11” skrivs in
// tolv, om “12” skrivs in
// Övriga inmatningar ska visas oförändrade, som de skrevs in. Till exempel ska 13 (inte “tretton”) visas om “13” skrivs in.

// Använd inte if.

// Ladda upp index.js.

// Ladda upp din lösning


// Ett litet tips kring switch-uppgiften (Nummer som ord): Ni måste ha strängar (inte nummer) i era cases. Till exempel case '1': (inte case 1:). Detta eftersom prompt producerar en sträng.

const number = prompt('Enter a number 1-12')

switch (number) {
  case '1':
    alert('ett')
    break;
  case '2':
    alert('två')
    break;
  case '3':
    alert('tre')
    break;
  case '4':
    alert('fyra')
    break;
  case '5':
    alert('fem')
    break;
  case '6':
    alert('sex')
    break;
  case '7':
    alert('sju')
    break
  case '8':
    alert('åtta')
    break;
  case '9':
    alert('nio')
    break;
  case '10':
    alert('tio')
    break;
  case '11':
    alert('elva')
    break;
  case '12':
    alert('tolv')
    break;
  case '13':
    alert('13')
    break;
  default:
    alert(number)
}
