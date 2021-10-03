let average = function (array) {
  let total = 0;
  let count = 0;

  if (array.length > 0) {
    array.forEach(function (item) {
      total += item;
      count++;
    })
    return total / count;
  } else {
    return null
  }
}
let numbers = []
console.log(average(numbers));
numbers = [1, 2, 3];
console.log(average(numbers));
