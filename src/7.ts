// Fix this TypeScript code to remove all errors

const notes7 = [
  { title: "First title note", status: true, description: "This is a note description" },
  { title: "Second title note", status: false, description: "This is a simple note description" },
  { title: "Third title note", status: true, description: "This is a third note description" }
];

function deleteNote(noteIndex) {
  // Remove the note at the specified index
  return { message: "Note deleted successfully" };
}

console.log(deleteNote(2));
console.log(notes7);



// Answer in TypeScript
// const notes7: Array<{ title: string; status: boolean; description: string }> = [
//   { title: "First title note", status: true, description: "This is a note description" },
//   { title: "Second title note", status: false, description: "This is a simple note description" },
//   { title: "Third title note", status: true, description: "This is a third note description" }
// ];

// function deleteNote(noteIndex: number): { message: string } {
//   notes7.splice(noteIndex, 1);
//   return { message: "Note deleted successfully" };
// }

// console.log(deleteNote(2));
// console.log(notes7);