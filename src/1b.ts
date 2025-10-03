// Fix this TypeScript code to remove all errors
// Don't change the `dashboard` function logic
// Update the code with Enum and Union

let role = 3;

function dashboard (role) {
  if (role === 1) {
    return "Welcome Owner, You can access and edit all data.";
  } else if (role === 2) {
    return "Welcome Admin, You can access all data, but you can only edit several not critical data";
  } else if (role === 3) {
    return "Welcome Visitor, You can only access your data";
  } else {
    return "Please login to access data"
  }
}

console.log(dashboard(role));



// Answer in TypeScript
// enum SystemRole {
//   Owner = 1,
//   Admin = 2,
//   Visitor = 3
// }

// type SystemRoleNumber = 1 | 2 | 3

// let role: SystemRoleNumber = 3;

// function dashboard (role: SystemRoleNumber): string {
//   if (role === SystemRole.Owner) {
//     return "Welcome Owner, You can access and edit all data.";
//   } else if (role === SystemRole.Admin) {
//     return "Welcome Admin, You can access all data, but you can only edit several not critical data";
//   } else if (role === SystemRole.Visitor) {
//     return "Welcome Visitor, You can only access your data";
//   } else {
//     return "Please login to access data"
//   }
// }

// console.log(dashboard(role));