// 10. Sum array using reduce

const numberArray = [1, 2, 3, 4, 5];
function sumArray() {
    const sum = numberArray.reduce((sum, num) => sum + num, 0);
    console.log("Array sum:", sum);
    return sum;
}
sumArray();