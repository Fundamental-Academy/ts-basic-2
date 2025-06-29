// Convert this javascript code to typescript

const humanData = {
  firstName: "Gus",
  lastName: "Dogler",
  weight: 90,
  height: 165,
  bloodType: "A",
  age: 30,
};

function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

function BMICalculationWithCallback(human, callbackFullName) {
  const bmiIndex = human.height / human.weight;
  return (
    callbackFullName(human.firstName, human.lastName) + " BMI Index = " + bmiIndex
  );
}



// Answer in TypeScript
// const humanData = {
//   firstName: "Gus",
//   lastName: "Dogler",
//   weight: 90,
//   height: 165,
//   bloodType: "A",
//   age: 30,
// };

// function fullName(firstName: string, lastName: string): string {
//   return firstName + " " + lastName;
// }

// function BMICalculationWithCallback(human: typeof humanData, callbackFullName: typeof fullName): string {
//   const bmiIndex = human.height / human.weight;
//   return (
//     callbackFullName(human.firstName, human.lastName) + " BMI Index = " + bmiIndex
//   );
// }