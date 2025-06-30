// 1. Variable declarations and scope explanation

function variableScopes() {
  var a = "I am var\n";       // Function scoped
  let b = "I am let\n";       // Block scoped
  const c = "I am const\n";   // Block scoped and immutable

  if (true) {
    var a = "var re-declared\n";
    let b = "let inside block\n";
    const c = "const inside block\n ";
    console.log("Inside block:\n", a, b, c);
  }

  console.log("Outside block:\n", a, b, c);
}
variableScopes();