//Q8-> Function to find repeated sum of digits until a single digit

function digitSum(n) {
    while (n > 9) {
        n = n.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
    }
    return n;
}
console.log(digitSum(456));