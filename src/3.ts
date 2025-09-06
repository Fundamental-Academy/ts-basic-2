// Convert this javascript code to typescript
// Create an array of objects representing fruits with properties: name, price, quantity, and quality.
// Use the following arrays to populate the objects: fruitNames, fruitPrices, fruitQuantities, fruitQualities.

// Finished example:
// [
//   {
//     name: "apple",
//     price: 1.2,
//     quantity: 10,
//     quality: "fresh",
//   }, {
//     name: "banana",
//     price: 0.5,
//     quantity: 5,
//     quality: "ripe",
//   },
//   Etc...
// ]

const fruitNames = ["apple", "banana", "orange", "grape", "kiwi"];
const fruitPrices = [1.2, 0.5, 0.8, 2.0, 1.5];
const fruitQuantities = [10, 5, 7, 3, 8];
const fruitQualities = ["fresh", "ripe", "overripe", "fresh", "ripe"];

const fruitData = [];

// write the looping code to create the array of objects

console.log(fruitData);



// Answer in TypeScript
// const fruitNames = ["apple", "banana", "orange", "grape", "kiwi"];
// const fruitPrices = [1.2, 0.5, 0.8, 2.0, 1.5];
// const fruitQuantities = [10, 5, 7, 3, 8];
// const fruitQualities = ["fresh", "ripe", "overripe", "fresh", "ripe"];

// const fruitData: Array<{ name: string; price: number; quantity: number; quality: string }> = [];

// fruitNames.forEach((name, index) => {
//   fruitData.push({
//     name: name,
//     price: fruitPrices[index],
//     quantity: fruitQuantities[index],
//     quality: fruitQualities[index]
//   });
// });

// console.log(fruitData);