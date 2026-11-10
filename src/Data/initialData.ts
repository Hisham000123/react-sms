import type { Student } from "../Types";

export const COURSES: string[] = [
  "Computer Science",
  "Mathematics",
  "Physics",
  "Biology",
  "Literature",
];

export const INITIAL_STUDENTS: Student[] = [
  { id: 1, name: "Aisha Rahman", email: "aisha@example.com", course: "Computer Science", active: true },
  { id: 2, name: "Rohan Menon", email: "rohan@example.com", course: "Mathematics", active: true },
  { id: 3, name: "Fatima Noor", email: "fatima@example.com", course: "Physics", active: true },
  { id: 4, name: "Arjun Nair", email: "arjun@example.com", course: "Biology", active: false },
  { id: 5, name: "Sara Thomas", email: "sara@example.com", course: "Literature", active: false },
];
