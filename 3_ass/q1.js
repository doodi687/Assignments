// Q1 ->Remove all the names starting with vowels from the list

let states = ['Andhra Pradesh', 'Bihar', 'Gujarat', 'Odisha', 'Kerala', 'Maharashtra', 'Uttar Pradesh', 'Assam', 'Tamil Nadu'];
let filteredStates = states.filter(state => !['a', 'e', 'i', 'o', 'u'].includes(state[0].toLowerCase()));
console.log(filteredStates); 