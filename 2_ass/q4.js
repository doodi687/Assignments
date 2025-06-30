// Q4-> You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digi

function sumOfDigitProducts(n1, n2) {
  let s1 = n1.toString().split('').reverse();
  let s2 = n2.toString().split('').reverse();
  let sum = 0;
  let max = Math.max(s1.length, s2.length);

  for (let i = 0; i < max; i++) {
    let d1 = Number(s1[i]) || 0; // Use 0 if undefined
    let d2 = Number(s2[i]) || 0;
    sum += d1 * d2;
  }

  return sum;
}

// Example usage:
console.log(sumOfDigitProducts(6, 34)); 
// (6*4)+(0*3) = 24
