// Fix this TypeScript code to remove all errors
// Don't change the `dashboard` function logic
// Update the code with Enum and Union

let role = 3;

function dashboard(role) {
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
