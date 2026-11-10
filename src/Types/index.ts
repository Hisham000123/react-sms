export interface Student {
  id: number;
  name: string;
  email: string;
  course: string;
  active: boolean;
}

export type NewStudent = Omit<Student, "id">;

export type TabId = "dashboard" | "students" | "add";
