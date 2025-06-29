// Convert this javascript code to typescript

let studentName = "Ketut";
let studentAge = 15;
let isPassing = true;
let studentScore = 85;

function getStudentInfo(name, age, passing, score) {
  return `Name: ${name}, Age: ${age}, Passing: ${passing}, Score: ${score}`;
}

console.log(getStudentInfo(studentName, studentAge, isPassing, studentScore));



// Answer in TypeScript
// let studentName: string = "Ketut";
// let studentAge: number = 15;
// let isPassing: boolean = true;
// let studentScore: number = 85;

// function getStudentInfo(name: string, age: number, passing: boolean, score: number): string {
//   return `Name: ${name}, Age: ${age}, Passing: ${passing}, Score: ${score}`;
// }

// console.log(getStudentInfo(studentName, studentAge, isPassing, studentScore));