// 4. Square numbers using map
const numbers = [1, 2, 3, 4, 5];

function squareEach(arr) {
  return arr.map(num => num * num);
}

console.log("Squared array:", squareEach(numbers));