// 6. Person object and greeting

const person = {
  name: "Vishal",
  age: 22,
  occupation: "Developer"
};

function greetPerson(obj) {
  console.log(`Hello, I'm ${obj.name}. I'm ${obj.age} years old and work as a ${obj.occupation}.`);
}

greetPerson(person);