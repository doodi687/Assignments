// 9. Merge two objects

function mergeTwoObjects(obj1, obj2) {
  return Object.assign({},obj1, obj2);
}

console.log("Merged object:", mergeTwoObjects({ name: "Vishal" }, { age: 22 }));