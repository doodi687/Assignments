//Q5-> Function to replace a wrong word with a correct word in a sentence

function correctfn(string, wrong, correct) {
    return string.replace(wrong, correct);
}
let sentence = 'I love my pc';
console.log(correctfn(sentence, 'pc', 'Laptop')); 