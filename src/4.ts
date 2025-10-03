// Fix this TypeScript code to remove all errors

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
