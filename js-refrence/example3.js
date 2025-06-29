const humanData = {
  firstName: "Gede",
  lastName: "Dogler",
  weight: 70,
  height: 185,
  bloodType: "AB",
  age: 28,
};

function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

function BMICalculationWithCallback(human, callbackFullName) {
  const bmiIndex = human.height / human.weight;
  return (
    callbackFullName(human.firstName, human.lastName) +
    " BMI Index = " +
    bmiIndex
  );
}

console.log(BMICalculationWithCallback(humanData, fullName));
