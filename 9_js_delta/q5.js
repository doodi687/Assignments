// 5. Filter odd numbers

function filterOdd(arr) {
  return arr.filter(num => num % 2 !== 0);
}

console.log("Odd numbers:", filterOdd([1, 2, 3, 4, 5, 6]));