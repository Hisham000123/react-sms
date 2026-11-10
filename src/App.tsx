import { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Tabs from "./Components/Tabs";
import Dashboard from "./Pages/Dashboard";
import StudentList from "./Pages/StudentList";
import AddStudent from "./Pages/AddStudent";
import { COURSES, INITIAL_STUDENTS } from "./Data/initialData";
import type { NewStudent, Student, TabId } from "./Types";

export default function App() {
  const [tab, setTab] = useState<TabId>("dashboard");
  const [students, setStudents] = useState<Student[]>(INITIAL_STUDENTS);

  const total = students.length;
  const active = students.filter((s) => s.active).length;

  const addStudent = (s: NewStudent) => {
    setStudents((prev) => [...prev, { ...s, id: Date.now() }]);
    setTab("students");
  };

  const toggleStudent = (id: number) =>
    setStudents((prev) => prev.map((s) => (s.id === id ? { ...s, active: !s.active } : s)));

  const removeStudent = (id: number) =>
    setStudents((prev) => prev.filter((s) => s.id !== id));

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans text-gray-900">
      <Header totalStudents={total} />

      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-6">
        <Tabs activeTab={tab} onChange={setTab} />

        {tab === "dashboard" && <Dashboard students={students} setTab={setTab} />}
        {tab === "students" && (
          <StudentList students={students} onToggle={toggleStudent} onDelete={removeStudent} />
        )}
        {tab === "add" && <AddStudent onAdd={addStudent} />}
      </main>

      <Footer total={total} active={active} courses={COURSES.length} />
    </div>
  );
}
