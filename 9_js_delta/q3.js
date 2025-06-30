// 3. Modify array with push and pop

function pushAndPop(arr) {
  arr.push("temporary item"); // Add to end
  arr.pop(); // Remove last item
  return arr;
}

console.log("Modified array:", pushAndPop([1, 2, 3]));