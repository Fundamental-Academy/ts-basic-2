// Convert this javascript code to typescript

const notes6 = [
  { title: "First title note", status: true, description: "This is a note description" },
  { title: "Second title note", status: false, description: "This is a simple note description" },
  { title: "Third title note", status: true, description: "This is a third note description" }
];

function editNote(noteIndex, note) {
  notes6[noteIndex] = note;
  return { message: "Note updated successfully" };
}

console.log(editNote(0, { title: "Updated first title note", status: true, description: "This is an updated note description" }));
console.log(notes6)

// Answer in TypeScript
// const notes6: Array<{ title: string; status: boolean; description: string }> = [
//   { title: "First title note", status: true, description: "This is a note description" },
//   { title: "Second title note", status: false, description: "This is a simple note description" },
//   { title: "Third title note", status: true, description: "This is a third note description" }
// ];

// function editNote(noteIndex: number, note: { title: string; status: boolean; description: string }): { message: string } {
//   notes6[noteIndex] = note;
//   return { message: "Note updated successfully" };
// }

// console.log(editNote(0, { title: "Updated first title note", status: true, description: "This is an updated note description" }));
// console.log(notes6)