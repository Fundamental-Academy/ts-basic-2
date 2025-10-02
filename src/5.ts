// Fix this TypeScript code to remove all errors

const notes5 = [
  { title: "First title note", status: true, description: "This is a note description" },
  { title: "Second title note", status: false, description: "This is a simple note description" }
];

function addNote(note) {
  // Add the new note to the array
  return notes5;
}

console.log(addNote({ title: "Third title note", status: true, description: "This is a third note description" }));



// Answer in TypeScript
// const notes5: Array<{ title: string; status: boolean; description: string }> = [
//   { title: "First title note", status: true, description: "This is a note description" },
//   { title: "Second title note", status: false, description: "This is a simple note description" }
// ];

// function addNote(note: { title: string; status: boolean; description: string }): typeof notes5 {
//   notes5.push(note);
//   return notes5;
// }

// console.log(addNote({ title: "Third title note", status: true, description: "This is a third note description" }));