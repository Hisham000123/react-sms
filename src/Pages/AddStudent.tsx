import { useState } from "react";
import type { ChangeEvent } from "react";
import Card from "../Components/ui/Card";
import { COURSES } from "../Data/initialData";
import type { NewStudent } from "../Types";

interface AddStudentProps {
  onAdd: (student: NewStudent) => void;
}

interface FormState {
  name: string;
  email: string;
  course: string;
}

const EMPTY_FORM: FormState = { name: "", email: "", course: COURSES[0] };

const inputClass =
  "mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";

export default function AddStudent({ onAdd }: AddStudentProps) {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);

  const set =
    (key: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm({ ...form, [key]: e.target.value });

  const submit = () => {
    if (!form.name.trim() || !form.email.trim()) return;
    onAdd({ ...form, active: true });
    setForm(EMPTY_FORM);
  };

  return (
    <Card className="max-w-lg p-6 space-y-4">
      <div>
        <h3 className="text-sm font-semibold text-gray-900">Add New Student</h3>
        <p className="text-xs text-gray-500">Register a new student</p>
      </div>
      <label className="block text-sm text-gray-700">
        Full name
        <input className={inputClass} value={form.name} onChange={set("name")} />
      </label>
      <label className="block text-sm text-gray-700">
        Email
        <input type="email" className={inputClass} value={form.email} onChange={set("email")} />
      </label>
      <label className="block text-sm text-gray-700">
        Course
        <select className={inputClass} value={form.course} onChange={set("course")}>
          {COURSES.map((c: string) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </label>
      <button
        onClick={submit}
        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Add student
      </button>
    </Card>
  );
}
