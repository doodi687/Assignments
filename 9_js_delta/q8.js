// 8. Get object keys

function extractKeys(obj) {
  return Object.keys(obj);
}

console.log("Keys of object:", extractKeys({ a: 10, b: 20, c: 30 }));