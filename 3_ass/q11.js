//Q11-> Calculate average for each student’s subjects

let input = [
    { student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } },
    { student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } },
    { student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } }
];
let result = input.map(student => {
    let studentName = Object.keys(student)[0];
    let subjects = Object.values(student)[0];
    let avg = Object.values(subjects).reduce((sum, score) => sum + score, 0) / Object.values(subjects).length;
    return { [studentName]: { average: avg } };
});
console.log(result);
