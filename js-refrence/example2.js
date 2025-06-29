// const human = {
//   firstName: "Dipadana",
//   lastName: "Putu",
//   weight: 80,
//   height: 165,
//   bloodType: "B",
//   age: 24,
//   fullName: function () {
//     console.log(this.firstName + " " + this.lastName);
//   },
// };

// human.lastName = "Made";

// human.fullName();
// console.log(human.firstName);

// const fruits = ["Melon", "Lemon", "Orange"];

// fruits[1] = "Berry";

// console.log(fruits, fruits[1]);

// const classroom = [
//   { name: "Putu", absen: 1, weight: 60, height: 150 },
//   { name: "Made", absen: 2, weight: 30, height: 160 },
//   { name: "Ketut", absen: 3, weight: 90, height: 145 },
// ];

// classroom[2] = { name: "Nyoman", absen: 4, weight: 20, height: 125 };

// console.log(classroom);

// const human = {
//   firstName: "Dipadana",
//   lastName: "Putu",
//   weight: 80,
//   height: 165,
//   bloodType: "B",
//   age: 24,
//   fullName: function () {
//     console.log(this.firstName + " " + this.lastName);
//   },
//   fruits: ["Melon", "Lemon", "Orange"],
// };

// human.fruits[2] = "Berry";

// console.log(human.fruits);

// const fruits = ["Melon", "Lemon", "Orange"];

// fruits.push("Berry");

// console.log(fruits);

// fruits.unshift("Apple");

// console.log(fruits);

// fruits.pop();

// console.log(fruits);

// fruits.shift();

// console.log(fruits);

// const cars = ["BMW", "Ford", "Ferrari", "Toyota", "Tesla"];

// cars.splice(2, 0, "Daihatsu", "Ferrari", "Chevrollete");

// cars.splice(4, 0, "Chevrollete");

// console.log(cars);

// const cars1 = ["BMW", "Ford", "Ferrari", "Toyota", "Tesla"];

// cars1[1] = "Daihatsu";

// const cars2 = [...cars1];

// console.log(cars1);
// console.log(cars2);

// function BMICalculation(human) {
//   const bmiIndex = human.height / human.weight;
//   return human.fullName() + " BMI Index = " + bmiIndex;
// }

// const human1 = {
//   firstName: "Dipadana",
//   lastName: "Putu",
//   weight: 80,
//   height: 165,
//   bloodType: "B",
//   age: 24,
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
//   fruits: ["Melon", "Lemon", "Orange"],
// };

// const human2 = {
//   firstName: "Kadek",
//   lastName: "Dgler",
//   weight: 90,
//   height: 205,
//   bloodType: "A",
//   age: 30,
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
//   fruits: [],
// };

// console.log(BMICalculation(human1));
// console.log(BMICalculation(human2));

// const human3 = {
//   firstName: "Made",
//   lastName: "Dinar",
//   weight: 70,
//   height: 185,
//   bloodType: "AB",
//   age: 14,
//   fruits: [],
// };

// function fullName(firstName, lastName) {
//   return firstName + " " + lastName;
// }

// function BMICalculationWithCallback(human, callbackFullName) {
//   const bmiIndex = human.height / human.weight;
//   return (
//     callbackFullName(human.firstName, human.lastName) + " BMI Index = " + bmiIndex
//   );
// }

// console.log(BMICalculationWithCallback(human3, fullName));

// Asycn via timeout

// console.log(1);

// This fuction will delayed 2 second
// setTimeout(function () {
//   console.log(2);
// }, 2000);

// This fuction will delayed 3 second
// setTimeout(function () {
//   console.log(3);
// }, 3000);

// console.log(4);

// Async via promise

// console.log(1);

// console.log(2);

// const displayNumber3 = new Promise(function (resolve, reject) {
//   resolve(3);
// });

// displayNumber3.then(function (response) {
//   console.log(response);
// });

// const displayNumber4 = new Promise(function (resolve, reject) {
//   resolve(4);
// });

// displayNumber4.then(function (response) {
//   console.log(response);
// });

// console.log(5);

// Async via async await

// async function displayNumber() {
//   console.log(1);

//   console.log(2);

//   const displayNumber3 = new Promise(function (resolve, reject) {
//     resolve(3);
//   });

//   console.log(await displayNumber3);

//   const displayNumber4 = new Promise(function (resolve, reject) {
//     resolve(4);
//   });

//   displayNumber4.then(function (response) {
//     console.log(response);
//   });

//   console.log(5);
// }

// displayNumber();
