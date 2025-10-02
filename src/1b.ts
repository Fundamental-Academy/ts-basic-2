// Fix this TypeScript code to remove all errors
// Don't change the `changeLight` function body
// The function should return "Stop" for "red", "Caution" for "yellow", and "Go" for "green"`

let currentLight = "red";

function changeLight(light) {
  if (light === "red") {
    return "Stop";
  } else if (light === "yellow") {
    return "Caution";
  } else if (light === "green") {
    return "Go";
  }
}

console.log(changeLight(currentLight));



// Answer in TypeScript
// type TrafficLight = "red" | "yellow" | "green";

// let currentLight: TrafficLight = "red";

// function changeLight(light: TrafficLight): string {
//   if (light === "red") {
//     return "Stop";
//   } else if (light === "yellow") {
//     return "Caution";
//   } else if (light === "green") {
//     return "Go";
//   } else {
//     return "Invalid light color";
//   }
// }

// console.log(changeLight(currentLight));